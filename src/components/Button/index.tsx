"use client"; 

import * as React from 'react';
import dynamic from 'next/dynamic';

const BasicModal = dynamic(() => import('../Modal/index'), { ssr: false });


const ButtonNewTrasaction: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <button className="px-6 py-3 bg-button text-sm text-white rounded-md hover:opacity-80" onClick={handleOpen}>Nova Transação</button>
        <BasicModal open={open} handleClose={handleClose} />
      </div>
    );
  };
  
  export default ButtonNewTrasaction;