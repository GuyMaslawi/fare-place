import styled from "@emotion/styled";
import Card from "@mui/material/Card";

export const CardStyle = styled(Card)({
    borderRadius: '1rem',
    border: 0,
    paddingBottom: '1rem',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',

    '.MuiCardActions-root': {
        padding: '1rem 1.6rem'
    }
});

export const Destinations = styled("div")({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '2rem',
    fontWeight: 'bold',

    '.MuiSvgIcon-root': {
        height: '3rem',
        width: '3rem'
    },

    span: {
        color: '#8B8B8B'
    }
});

export const Views = styled("div")({
    fontSize: '1.6rem',
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem',

    '.MuiSvgIcon-root': {
        marginRight: '.5rem',
        height: '2rem',
        width: '2rem'
    }
});
