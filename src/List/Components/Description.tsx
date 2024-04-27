// UI components
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export default function Description({ item }: any) {
    const tagExist = (tag: string): JSX.Element => {
        const tags: string = item.tags.find((t: any) => t.name === tag);

        if (tags) return <CheckBoxIcon sx={{ color: 'green' }} />;
        return <CloseIcon sx={{ color: 'red' }} />;
    };

    const getPlatforms = (): string => {
        const platforms: string[] = item.platforms.map(
            (p: any) => p.platform.name
        );

        return platforms.sort().join(', ');
    };

    return (
        <BoxSX>
            <Typography>
                <span style={{ opacity: 0.7 }}>Platforms: </span>
                {getPlatforms()}
            </Typography>

            <Typography>
                <span style={{ opacity: 0.7 }}>Languages: </span>
                {item.language.join(', ')}
            </Typography>

            <Typography>
                <span style={{ opacity: 0.7 }}>Voices: </span>
                {item.voiceLanguages.join(', ')}
            </Typography>

            <Typography sx={{ display: 'flex', gap: '5px' }}>
                <span style={{ opacity: 0.7 }}>Singleplayer: </span>
                {tagExist('Singleplayer')}
            </Typography>

            <Typography sx={{ display: 'flex', gap: '5px' }}>
                <span style={{ opacity: 0.7 }}>Co-op: </span>
                {tagExist('Co-op')}
            </Typography>

            <Typography sx={{ display: 'flex', gap: '5px' }}>
                <span style={{ opacity: 0.7 }}>Multiplayer: </span>
                {tagExist('Multiplayer')}
            </Typography>
        </BoxSX>
    );
}

const BoxSX = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: '10px',
    padding: '10px',
});
