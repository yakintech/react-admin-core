import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function DetailModal({ open, setOpen, name, description }) {

    const handleClose = () => setOpen(false);

    const { t } = useTranslation();

    return (<>
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {t("name")}: {name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {t("description")}:  {description}
                    </Typography>
                </Box>
            </Modal>
        </div>
    </>
    )
}

export default DetailModal