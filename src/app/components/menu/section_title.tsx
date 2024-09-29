import React from 'react'

const MenuSectionTitle = ({ text }: { text: string }) => {
    return (
        <section>
            <h4 className="text-sm leading-none font-bold">{text}</h4>
            <hr className='mb-4 mt-2'/>
        </section>
    )
}

export default MenuSectionTitle