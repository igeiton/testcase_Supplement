// UI components
import { ImageList, ImageListItem, Modal, styled } from '@mui/material';

// hooks
import { useState } from 'react';

interface IOpen {
    open: boolean;
    image: string;
}

export default function CustomModal({ item }: any) {
    const [isOpen, setOpen] = useState<IOpen>({
        open: false,
        image: '',
    } as IOpen);

    const handleOpen = (image: string) => {
        setOpen({ open: !isOpen.open, image });
    };

    return (
        <>
            <ImageListSX cols={item.short_screenshots.length} rowHeight={50}>
                {item.short_screenshots.map((screenshot: any) => (
                    <ImageListItemSX key={screenshot.id}>
                        <img
                            style={imgStyles}
                            src={screenshot.image}
                            alt={screenshot.id}
                            loading="lazy"
                            onClick={() => handleOpen(screenshot.image)}
                        />
                    </ImageListItemSX>
                ))}
            </ImageListSX>

            <Modal
                open={isOpen.open}
                onClose={() => handleOpen('')}
                sx={{
                    alignSelf: 'center',
                }}
            >
                <img
                    style={imgStyles}
                    src={isOpen.image}
                    alt={item.id}
                    loading="lazy"
                    onClick={() => handleOpen('')}
                />
            </Modal>
        </>
    );
}

const ImageListSX = styled(ImageList)({
    padding: '10px',
    gap: '10px',
});

const ImageListItemSX = styled(ImageListItem)({
    width: '100%',
});

const imgStyles = {
    borderRadius: '5px',
    width: '100%',
};
