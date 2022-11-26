import React, { useContext } from 'react'
import { AuxContext } from '../context/AppContext'
import FormNotes from './FormNotes'
import Note from './Note'

const ContainerFilterNotes = () => {

    const { filterNotes, ListView } = useContext(AuxContext)


    return (
        <main className='ps-3 pe-3 pt-5'>
            {filterNotes.length === 0 && <div className='emptyNotes'><div className='svgEmpty opacity-75'></div><p className='text-light opacity-75'>Notes you add appear here</p></div>}
            <div className={`${ListView ? 'container-fluid pe-0 ps-0 d-flex flex-column align-items-center pt-5' : 'containerNotes pt-5'}`}>
                {
                    filterNotes.map((item) => {
                        return <Note
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            isPinned={item.isPinned}
                            color={item.color}
                        />
                    }
                    )
                }
            </div>
        </main>
    )
}

export default ContainerFilterNotes