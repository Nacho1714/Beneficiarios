import React from 'react';

// Material UI
import { Chip, Tooltip } from '@mui/material';

// Iconos
import Icons from '../../icon';

// Interfaz
import { CreditsTagProps } from '../../interface/contributor';

const CreditsTag: React.FC<CreditsTagProps> = ({ contributorName, contributionDetail }) => {
    return (
        <Tooltip title={contributionDetail || `Contribuido por ${contributorName}`}>
            <Chip
                icon={Icons.AccountCircle}
                label={`Contribuidor: ${contributorName}`}
                size="small"
                variant="outlined"
                color="primary"
                sx={{ mt: 1 }}
            />
        </Tooltip>
    );
};

export default CreditsTag;
