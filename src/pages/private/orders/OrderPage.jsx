import axios from 'axios';
import moment from 'moment/moment';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';

function OrderPage() {


    const { data } = useQuery('orders', () => axios.get('https://northwind.vercel.app/api/orders'));


    return (<>
        <h1>Orders</h1>
        <table>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer ID</th>
                    <th>Employee ID</th>
                    <th>Order Date</th>
                    <th>Required Date</th>
                    <th>Shipped Date</th>
                    <th>Difference</th>
                    {/* required date + 3 days */}
                    <th>Alternative Shipped Date</th>
                </tr>
            </thead>
            <tbody>
                {data?.data.map((order) => {

                    let difference = getDifferenceDays(order.requiredDate, order.shippedDate)
                    let color = '';

                    if (difference > 0)
                        color = 'tomato'

                    return <tr style={{ backgroundColor: color }} key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customerId}</td>
                        <td>{order.employeeId}</td>
                        <td>{moment(order.orderDate).format('DD MMMM YYYY dddd h:mm')}</td>
                        <td>{moment(order.requiredDate).format('DD MMMM YYYY dddd h:mm')}</td>
                        <td>{moment(order.shippedDate).format('DD MMMM YYYY dddd h:mm')}</td>
                        <td>{difference}</td>
                        <td>{getAlternativeDay(order.shippedDate)}</td>
                    </tr>
                }

                )}
            </tbody>
        </table>
    </>
    )
}

export default OrderPage


//Eğer customer isterse siparişi 3 gün sonra getirebiliriz. bu fonksiyon bunu hesaplar. Eğer 3 gün sonrası weekend ( hafta sonuna) denk gelirse siparişi pazartesi getiririz
function getAlternativeDay(date) {
    if(date != "NULL"){
        let alternative = moment(date).add(3,'days');

        if(alternative.day() == 6){
            return alternative.add(2,'days').format('DD MMMM YYYY dddd h:mm')
        }
        else if(alternative.day() == 0){
            return alternative.add(1,'days').format('DD MMMM YYYY dddd h:mm')
        }
        else{
            return alternative.format('DD MMMM YYYY dddd h:mm')
        }
    }
    else{
        return ""
    }
}


function getDifferenceDays(date1, date2) {

    let x = moment(date1);
    let y = moment(date2);

    let result = y.diff(x, 'days');

    if (result <= 0)
        return 0;
    else
        return result

}


