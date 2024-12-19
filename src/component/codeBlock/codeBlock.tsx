import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Icons
import Icons from '../../icon'

// Material UI
import { Box, Paper, Tooltip, IconButton } from '@mui/material';

// Custom Hook
import { useSnackbar } from '../../context/snackbar/SnackbarContext';

interface CodeBlockProps {
    code: string;
    language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps): JSX.Element {
    
    const {showSnackbar} = useSnackbar();

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            showSnackbar('¡Código copiado al portapapeles!', 'success')
        } catch (err) {
            showSnackbar('Error al copiar el código.', 'error')
        }
    };

    return (
        <Box sx={{ position: 'relative', my: 2 }}>
            <Paper
                elevation={3}
                sx={{
                    backgroundColor: '#1e1e1e',
                    padding: 2,
                    borderRadius: 2,
                    overflow: 'hidden',
                }}
            >
                <Tooltip title="Copiar código">
                    <IconButton
                        onClick={handleCopy}
                        size="small"
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            color: 'white',
                            zIndex: 2, // Asegura que esté encima de otros elementos
                        }}
                    >
                        {Icons.ContentCopy}
                    </IconButton>
                </Tooltip>
                <SyntaxHighlighter language={language} style={materialDark}>
                    {code}
                </SyntaxHighlighter>
            </Paper>
        </Box>
    );
};