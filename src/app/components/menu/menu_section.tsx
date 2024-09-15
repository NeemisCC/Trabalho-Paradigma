import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {

}
const MenuSection = ({ children }: Props) => {
    return (
        <div className="p-4">
            {children}
        </div>
    )
}

export default MenuSection