import React, { forwardRef, useEffect } from 'react'
import './pdf.css'
import { usePDF } from 'react-to-pdf';
import { DataContext } from './context';
import { useContext } from 'react';
const Pdf = () => {
    let contextFromPdf = useContext(DataContext)
    const { toPDF, targetRef } = usePDF({ filename: `${contextFromPdf?.data?.name || 'recept'}.pdf` });
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };
    useEffect(()=>{
    console.log('contextFromPdf',contextFromPdf)

},[contextFromPdf])
    const onload = () => {
        toPDF()
    }
    useEffect(() => {
        onload()
    }, [])


    return (
        <>
            <div className="App">

                <div ref={targetRef}>

                    <div className='Main-pdf'>
                        <div className='Main-sub-pdf'>

                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '20px' }}>HAUPVC WINDOWS & DOORS PVT LTD</div>
                                <div><img style={{ width: '100px' }} src={process.env.PUBLIC_URL + '/myLogo.png'} /></div>
                            </div>
                            <div>
                                <div>{formatDate(new Date())}</div>
                            </div>
                            <div style={{ marginLeft: '250px', fontWeight: 'bold' }}>
                                QUOTATION TO
                            </div>

                            <div style={{ display: 'flex' }}>
                                <div>Name :</div>
                                <div style={{ marginLeft: '50px' }}>{contextFromPdf?.data?.name}</div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div>Contact Number :</div>
                                <div style={{ marginLeft: '50px' }}>{contextFromPdf?.data?.contact}</div>
                            </div>

                            {/* FIRST BLOCK */}
                            <div style={{ width: '100%', display: 'flex', marginTop: '30px', border: '1px solid black' }}>
                                <div style={{ width: '60%' }}>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold', backgroundColor: 'grey', height: '25px', alignItems: 'center', display: 'flex' }}>Description ( Pamo / Wizplaz in white colour )</div>
                                    {contextFromPdf?.data?.doubleSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash sliding window with net</div>}
                                    {contextFromPdf?.data?.singleSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Single sash openable window</div>}
                                    <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>5mm plain glass </div>

                                    <div style={{ backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Installation charges </div>
                                    <div style={{ backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Silicon charges for filling the gap and finishing </div>
                                    <div style={{ backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Transport charges per carriage  </div>
                                </div>

                                <div style={{ width: '40%', border: '1px solid black', borderTop: '0px', borderBottom: '0px', borderRight: '0px' }}>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', backgroundColor: 'gray', display: 'flex', height: '25px', alignItems: 'center', paddingLeft: '2px', fontSize: '12px', fontWeight: '400' }}>Quantity(Qty) </div>
                                        <div style={{ width: '20%', backgroundColor: 'gray', display: 'flex', height: '25px', alignItems: 'center', paddingLeft: '2px', fontSize: '12px', fontWeight: '400', borderLeft: '1px solid black' }}>Total(Sft)  </div>
                                        <div style={{ width: '20%', backgroundColor: 'gray', display: 'flex', height: '25px', alignItems: 'center', paddingLeft: '2px', fontSize: '12px', fontWeight: '400', borderLeft: '1px solid black' }}>Rate. Sft </div>
                                        <div style={{ width: '30%', backgroundColor: 'gray', display: 'flex', height: '25px', alignItems: 'center', paddingLeft: '2px', fontSize: '12px', fontWeight: '400', borderLeft: '1px solid black' }}>Total amount </div>
                                    </div>

                                    <div style={{ width: '100%', display: 'flex' }}>
                                        {contextFromPdf?.data?.doubleSash && <>      
                                           <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.doubleSashQuantity} </div>
                                            <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.doubleSashSquareFoots} </div>
                                            <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>800 </div>
                                            <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.doubleSashSquareFoots*800}</div></>}
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                    {contextFromPdf?.data?.singleSash && <>      
                                           <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.singleSashQuantity} </div>
                                            <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.singleSashSquareFoots} </div>
                                            <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>850 </div>
                                            <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.singleSashSquareFoots * 850}</div></>}
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.doubleSashQuantity + +contextFromPdf?.data?.singleSashQuantity} </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots} </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>270 </div>
                                        <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{(+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots) * 270}</div>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.doubleSashQuantity + +contextFromPdf?.data?.singleSashQuantity}</div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots}   </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>50 </div>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{(+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots) * 50}</div>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>1000</div>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>  </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>5000</div>
                                    </div>

                                </div>
                            </div>

                            <div style={{ width: '100%', display: 'flex', }}>
                                <div style={{ width: '60%' }}>

                                </div>

                                <div style={{ width: '40%', border: '1px solid black', borderTop: 'none' }}>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '70%', backgroundColor: '#006CA5', display: 'flex', padding: '7px', fontSize: '14px', fontWeight: 'bold' }}>Total amount </div>
                                        <div style={{ width: '30%', backgroundColor: '#006CA5', display: 'flex', padding: '7px', fontSize: '14px', fontWeight: 'bold', borderLeft: '1px solid black' }}>{(+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots) * 50 + 6000 + (+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots) * 270 + contextFromPdf?.data?.singleSashSquareFoots * 850 + contextFromPdf?.data?.doubleSashSquareFoots*800 } </div>
                                    </div>



                                </div>
                            </div>


                            {/* SECOND BLOCK */}
                            <div style={{ width: '100%', display: 'flex', marginTop: '30px', border: '1px solid black' }}>
                                <div style={{ width: '60%' }}>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold', backgroundColor: 'grey', height: '25px', alignItems: 'center', display: 'flex' }}>Description ( Turk profile in white colour )</div>
                                    {contextFromPdf?.data?.doubleSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash sliding window with net</div>}
                                    {contextFromPdf?.data?.singleSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Single sash openable window</div>}
                                    <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>5mm plain glass </div>

                                    <div style={{ backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Installation charges </div>
                                    <div style={{ backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Silicon charges for filling the gap and finishing </div>
                                    <div style={{ backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Transport charges per carriage  </div>
                                </div>

                                <div style={{ width: '40%', border: '1px solid black', borderTop: '0px', borderBottom: '0px', borderRight: '0px' }}>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', backgroundColor: 'gray', display: 'flex', height: '25px', alignItems: 'center', paddingLeft: '2px', fontSize: '12px', fontWeight: '400' }}>Quantity(Qty) </div>
                                        <div style={{ width: '20%', backgroundColor: 'gray', display: 'flex', height: '25px', alignItems: 'center', paddingLeft: '2px', fontSize: '12px', fontWeight: '400', borderLeft: '1px solid black' }}>Total(Sft)  </div>
                                        <div style={{ width: '20%', backgroundColor: 'gray', display: 'flex', height: '25px', alignItems: 'center', paddingLeft: '2px', fontSize: '12px', fontWeight: '400', borderLeft: '1px solid black' }}>Rate. Sft </div>
                                        <div style={{ width: '30%', backgroundColor: 'gray', display: 'flex', height: '25px', alignItems: 'center', paddingLeft: '2px', fontSize: '12px', fontWeight: '400', borderLeft: '1px solid black' }}>Total amount </div>
                                    </div>

                                    <div style={{ width: '100%', display: 'flex' }}>
                                        {contextFromPdf?.data?.doubleSash && <>      
                                           <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.doubleSashQuantity} </div>
                                            <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.doubleSashSquareFoots} </div>
                                            <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>900 </div>
                                            <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.doubleSashSquareFoots*900}</div></>}
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                    {contextFromPdf?.data?.singleSash && <>      
                                           <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.singleSashQuantity} </div>
                                            <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.singleSashSquareFoots} </div>
                                            <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>950 </div>
                                            <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.singleSashSquareFoots * 950}</div></>}
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.doubleSashQuantity + +contextFromPdf?.data?.singleSashQuantity} </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots} </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>270 </div>
                                        <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{(+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots) * 270}</div>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.doubleSashQuantity + +contextFromPdf?.data?.singleSashQuantity}</div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots}   </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>50 </div>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{(+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots) * 50}</div>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>1000</div>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>  </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>5000</div>
                                    </div>

                                </div>
                            </div>

                            <div style={{ width: '100%', display: 'flex', }}>
                                <div style={{ width: '60%' }}>

                                </div>

                                <div style={{ width: '40%', border: '1px solid black', borderTop: 'none' }}>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '70%', backgroundColor: '#006CA5', display: 'flex', padding: '7px', fontSize: '14px', fontWeight: 'bold' }}>Total amount </div>
                                        <div style={{ width: '30%', backgroundColor: '#006CA5', display: 'flex', padding: '7px', fontSize: '14px', fontWeight: 'bold', borderLeft: '1px solid black' }}>{(+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots) * 50 + 6000 + (+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots) * 270 + contextFromPdf?.data?.singleSashSquareFoots * 950 + contextFromPdf?.data?.doubleSashSquareFoots*900 } </div>
                                    </div>



                                </div>
                            </div>

                            {/* THIRD BLOCK */}

                            <div style={{ width: '100%', display: 'flex', marginTop: '30px', border: '1px solid black' }}>
                                <div style={{ width: '60%' }}>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold', backgroundColor: 'grey', height: '25px', alignItems: 'center', display: 'flex' }}>Description ( Eurofile / skypen in white colour )</div>
                                    {contextFromPdf?.data?.doubleSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash sliding window with net</div>}
                                    {contextFromPdf?.data?.singleSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Single sash openable window</div>}
                                    <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>5mm plain glass </div>

                                    <div style={{ backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Installation charges </div>
                                    <div style={{ backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Silicon charges for filling the gap and finishing </div>
                                    <div style={{ backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Transport charges per carriage  </div>
                                </div>

                                <div style={{ width: '40%', border: '1px solid black', borderTop: '0px', borderBottom: '0px', borderRight: '0px' }}>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', backgroundColor: 'gray', display: 'flex', height: '25px', alignItems: 'center', paddingLeft: '2px', fontSize: '12px', fontWeight: '400' }}>Quantity(Qty) </div>
                                        <div style={{ width: '20%', backgroundColor: 'gray', display: 'flex', height: '25px', alignItems: 'center', paddingLeft: '2px', fontSize: '12px', fontWeight: '400', borderLeft: '1px solid black' }}>Total(Sft)  </div>
                                        <div style={{ width: '20%', backgroundColor: 'gray', display: 'flex', height: '25px', alignItems: 'center', paddingLeft: '2px', fontSize: '12px', fontWeight: '400', borderLeft: '1px solid black' }}>Rate. Sft </div>
                                        <div style={{ width: '30%', backgroundColor: 'gray', display: 'flex', height: '25px', alignItems: 'center', paddingLeft: '2px', fontSize: '12px', fontWeight: '400', borderLeft: '1px solid black' }}>Total amount </div>
                                    </div>

                                    <div style={{ width: '100%', display: 'flex' }}>
                                        {contextFromPdf?.data?.doubleSash && <>      
                                           <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.doubleSashQuantity} </div>
                                            <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.doubleSashSquareFoots} </div>
                                            <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>950 </div>
                                            <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.doubleSashSquareFoots*950}</div></>}
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                    {contextFromPdf?.data?.singleSash && <>      
                                           <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.singleSashQuantity} </div>
                                            <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.singleSashSquareFoots} </div>
                                            <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>1000 </div>
                                            <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.singleSashSquareFoots * 1000}</div></>}
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.doubleSashQuantity + +contextFromPdf?.data?.singleSashQuantity} </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots} </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>270 </div>
                                        <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{(+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots) * 270}</div>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.doubleSashQuantity + +contextFromPdf?.data?.singleSashQuantity}</div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots}   </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>50 </div>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{(+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots) * 50}</div>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>1000</div>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>  </div>
                                        <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                        <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>5000</div>
                                    </div>

                                </div>
                            </div>

                            <div style={{ width: '100%', display: 'flex', }}>
                                <div style={{ width: '60%' }}>

                                </div>

                                <div style={{ width: '40%', border: '1px solid black', borderTop: 'none' }}>
                                    <div style={{ width: '100%', display: 'flex' }}>
                                        <div style={{ width: '70%', backgroundColor: '#006CA5', display: 'flex', padding: '7px', fontSize: '14px', fontWeight: 'bold' }}>Total amount </div>
                                        <div style={{ width: '30%', backgroundColor: '#006CA5', display: 'flex', padding: '7px', fontSize: '14px', fontWeight: 'bold', borderLeft: '1px solid black' }}>{(+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots) * 50 + 6000 + (+contextFromPdf?.data?.singleSashSquareFoots + +contextFromPdf?.data?.doubleSashSquareFoots) * 270 + contextFromPdf?.data?.singleSashSquareFoots * 1000 + contextFromPdf?.data?.doubleSashSquareFoots*950 } </div>
                                    </div>



                                </div>
                            </div>

                            {/* END */}


                            <div style={{ width: '100%' }}>
                                <div style={{ width: '60%' }}>
                                    <div style={{ textDecoration: 'underline', textAlign: 'center' }}>Paymeny terms</div>
                                </div>

                                <div style={{ width: '100%', display: 'flex' }}>
                                    <div style={{ width: '60%' }}>
                                        <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'bold', marginTop: '5px' }}>i). Advance on confirmation of order. </div>
                                        <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'bold', marginTop: '5px' }}>ii) After delivery .</div>
                                    </div>
                                    <div style={{ width: '40%' }}>
                                        <div style={{ backgroundColor: 'lightgrey', paddingLeft: '20px', paddingRight: '20px', fontSize: '12px', width: 'fit-content' }}>75%</div>
                                        <div style={{ backgroundColor: 'lightgrey', paddingLeft: '20px', paddingRight: '20px', fontSize: '12px', width: 'fit-content' }}>25%</div>
                                    </div>

                                </div>

                                <div style={{ width: '70%', marginTop: '10px' }}>
                                    <div style={{ textDecoration: 'underline', textAlign: 'center' }}>Terms and conditions</div>
                                </div>
                                <div style={{ width: '100%' }}>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}>1 Quotation is valid for 03 days </div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}> 2 Minimum Size of the window shall be charged as 12 sft and for door it shall be 20 sft</div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}> 3 The delivery time shall be 30-45 working days from the date of advance payment and final sizes.</div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}>4 Please add Rs 75/sft for 3 panel and 125/sft for 4 panel window </div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}> 5 All Electric points at the site, boarding and lodging facilities for the labour in or outside Karachi shall be clients responsibility</div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}> 6 It is expected that openings for windows/doors will be accurately plastered. Filling up to max. of 5mm will be done.Filling more
                                        than 5mm will be charged to the costumer</div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}>7 The Company shall provide 10 years colour (white) and deformation warrantee. </div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}> 8 Defaults in payments shall terminate the warrantee clause and time schedule.</div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}>9 ALL imported hardware accessories(rubber, wheel, brushes, handles and latches) shall be used. </div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}> 10 The prices may be revised if final sizes/ drawings are not received within 30 days of signing this agreement</div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}> 11 Please make all payment through cross cheque/ pay order in favor of HAUPVC</div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}> 12 Final Invoice shall be prepared as per actual installed windows, payment shall be made by the client accordingly</div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}>13 Measurements shall be rounded of to(+) standard sizes i.e 0.25, 0.5, 0.75 inches </div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}> 14 The client shall provide scaffolding, ladder, template for arch etc. to facilitate the company during installation if required.</div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}>15 The order once comfirmed and advance payment is made, it will not be refundable </div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}>16 The orders may get delayed due to unforseen comditions like force majeure, lock downs, pandemic. </div>
                                    <div style={{ fontSize: '12px', color: 'grey', fontWeight: 'semiBold', marginTop: '2px' }}> 17 The glass will be charged as per prevailing market rates</div>
                                </div>

                                <div style={{ width: '100%', display: 'flex', marginTop: '80px' }}>
                                    <div style={{ width: '70%', textDecoration: 'underline', fontWeight: 'bold' }}>HAUPVC WINDOWS AND DOORS PVT LTD</div>
                                    <div style={{ width: '30%', textDecoration: 'underline', fontWeight: 'bold', textAlign: 'center' }}>Client</div>
                                </div>

                                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                                    <img src={process.env.PUBLIC_URL + '/bigLogo.png'} />
                                </div>

                                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '80%', fontWeight: 'bold', textAlign: 'center', fontStyle: 'italic' }}>
                                        treet 7, D area, qayumabad, Karachi, Sindh, Pakistan-74900. | Haupvcwindowsdoors@gamil.com. |
                                        https://haupvc.com/. | +92 318 2815068
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Pdf
