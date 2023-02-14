import { FC, ReactElement, useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
    isMenuOpen : boolean;
}

const UI_INITIAL_STATE : UiState = {
    isMenuOpen: false,
}

interface PropsProvider{
    children : ReactElement
}
export const UiProvider:FC<PropsProvider> = ({ children }) => {
    const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE )

    const toggleSideMenu = () => {
        dispatch( { type: '[UI] - ToggleMenu' } )
    }


    return (
        <UiContext.Provider value={{
            ...state,
            toggleSideMenu,
        }}>
            { children }
        </UiContext.Provider>
    )
}