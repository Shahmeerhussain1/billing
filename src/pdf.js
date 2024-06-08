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
        return `${day}/${month}/${year}`;
    };
    useEffect(() => {
        onLoad()

    }, [])

    const onLoad = () => {
        toPDF()
    }


    function mm5() {
        return contextFromPdf?.data?.blackData?.fivemmGlass?.twoSeventy ? 270 :
            contextFromPdf?.data?.blackData?.fivemmGlass?.fourHundred ? 410 :
                contextFromPdf?.data?.blackData?.fivemmGlass?.sevenHundred ? 700 : 0
    }
    function mm5white() {
        return contextFromPdf?.data?.whiteData?.fivemmGlass?.twoSeventy ? 270 :
            contextFromPdf?.data?.whiteData?.fivemmGlass?.fourHundred ? 410 :
                contextFromPdf?.data?.whiteData?.fivemmGlass?.sevenHundred ? 700 : 0
    }


    return (
        <>
            {/* <div style={{ width: '1200px', display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => { toPDF() }} style={{ padding: '16px' , fontWeight : 'bold', color: 'white', backgroundColor: 'darkblue', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '150px !important', borderRadius: '12px !important', cursor: 'pointer !important' , border : 'none' , outline : 'none' }}>Download</button>
            </div> */}
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
                            {contextFromPdf?.data?.blackColor &&
                                <>
                                    <div style={{ width: '100%', display: 'flex', marginTop: '30px', border: '1px solid black' }}>
                                        <div style={{ width: '60%' }}>
                                            <div style={{ fontSize: '18px', fontWeight: 'bold', backgroundColor: 'grey', height: '25px', alignItems: 'center', display: 'flex' }}>Description ( Turk profile in black colour )</div>
                                            {contextFromPdf?.data?.blackData?.doubleSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash sliding window with net</div>}
                                            {contextFromPdf?.data?.blackData?.singleSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Single sash openable window</div>}
                                            {contextFromPdf?.data?.blackData?.twoSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Two sash sliding window with Centre Fix and two net sash</div>}
                                            {contextFromPdf?.data?.blackData?.openableVentilator && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Openable ventilator</div>}
                                            {contextFromPdf?.data?.blackData?.fixWindow && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Fix window</div>}
                                            {contextFromPdf?.data?.blackData?.doubleSash80mm && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash sliding window with net ( 80mm frame and 55mm sash )</div>}
                                            {contextFromPdf?.data?.blackData?.doubleSash60mm && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash openable window ( 60mm frame and 60mm sash )</div>}
                                            {(contextFromPdf?.data?.blackData?.fivemmGlass?.twoSeventy ||
                                                contextFromPdf?.data?.blackData?.fivemmGlass?.fourHundred ||
                                                contextFromPdf?.data?.blackData?.fivemmGlass?.sevenHundred) &&
                                                <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>
                                                    {contextFromPdf?.data?.blackData?.fivemmGlass?.twoSeventy ? '5mm plain glass' :
                                                        contextFromPdf?.data?.blackData?.fivemmGlass?.fourHundred ? '5mm plain Tempered glass' :
                                                            contextFromPdf?.data?.blackData?.fivemmGlass?.sevenHundred ? '5mm plain glass + double glaze 8mm spacer + 5mm plain glass + georgion bar' : ''}
                                                </div>
                                            }

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
                                                {contextFromPdf?.data?.blackData?.doubleSash && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSashQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSashSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2100 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSashSquareFoots * 2100}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.blackData?.singleSash && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.singleSashQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.singleSashSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2200 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.singleSashSquareFoots * 2200}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.blackData?.twoSash && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.twoSashQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.twoSashSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2600 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.twoSashSquareFoots * 2600}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.blackData?.openableVentilator && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.openableVentilatorQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>1650 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots * 1650}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.blackData?.fixWindow && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.fixWindowQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.fixWindowSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>900 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.fixWindowSquareFoots * 900}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.blackData?.doubleSash80mm && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSash80mmQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2100 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots * 2100}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.blackData?.doubleSash60mm && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSash60mmQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2200 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots * 2200}</div></>}
                                            </div>

                                            {/* 5mm glass */}

                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {
                                                    (contextFromPdf?.data?.blackData?.fivemmGlass?.twoSeventy ||
                                                        contextFromPdf?.data?.blackData?.fivemmGlass?.fourHundred ||
                                                        contextFromPdf?.data?.blackData?.fivemmGlass?.sevenHundred) &&
                                                    <>
                                                        <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.blackData?.doubleSashQuantity + +contextFromPdf?.data?.blackData?.singleSashQuantity + +contextFromPdf?.data?.blackData?.twoSashQuantity + +contextFromPdf?.data?.blackData?.fixWindowQuantity + +contextFromPdf?.data?.blackData?.openableVentilatorQuantity + +contextFromPdf?.data?.blackData?.doubleSash80mmQuantity + +contextFromPdf?.data?.blackData?.doubleSash60mmQuantity} </div>
                                                        <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.blackData?.doubleSashSquareFoots + +contextFromPdf?.data?.blackData?.singleSashSquareFoots + +contextFromPdf?.data?.blackData?.twoSashSquareFoots + +contextFromPdf?.data?.blackData?.fixWindowSquareFoots + +contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots} </div>
                                                        <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.fivemmGlass?.twoSeventy ? 270 :
                                                            contextFromPdf?.data?.blackData?.fivemmGlass?.fourHundred ? 410 :
                                                                contextFromPdf?.data?.blackData?.fivemmGlass?.sevenHundred ? 700 : 0} </div>
                                                        <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{(+contextFromPdf?.data?.blackData?.doubleSashSquareFoots + +contextFromPdf?.data?.blackData?.singleSashSquareFoots + +contextFromPdf?.data?.blackData?.twoSashSquareFoots + +contextFromPdf?.data?.blackData?.fixWindowSquareFoots + +contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots) * mm5()} </div>
                                                    </>
                                                }
                                            </div>


                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.blackData?.doubleSashQuantity + +contextFromPdf?.data?.blackData?.singleSashQuantity + +contextFromPdf?.data?.blackData?.twoSashQuantity + +contextFromPdf?.data?.blackData?.fixWindowQuantity + +contextFromPdf?.data?.blackData?.openableVentilatorQuantity + +contextFromPdf?.data?.blackData?.doubleSash80mmQuantity + +contextFromPdf?.data?.blackData?.doubleSash60mmQuantity} </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.blackData?.doubleSashSquareFoots + +contextFromPdf?.data?.blackData?.singleSashSquareFoots + +contextFromPdf?.data?.blackData?.twoSashSquareFoots + +contextFromPdf?.data?.blackData?.fixWindowSquareFoots + +contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots} </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>50 </div>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{(+contextFromPdf?.data?.blackData?.doubleSashSquareFoots + +contextFromPdf?.data?.blackData?.singleSashSquareFoots + +contextFromPdf?.data?.blackData?.twoSashSquareFoots + +contextFromPdf?.data?.blackData?.fixWindowSquareFoots + +contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots) * 50}</div>
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>5000</div>
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>  </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>7000</div>
                                            </div>

                                        </div>
                                    </div>

                                    <div style={{ width: '100%', display: 'flex', }}>
                                        <div style={{ width: '60%' }}>

                                        </div>

                                        <div style={{ width: '40%', border: '1px solid black', borderTop: 'none' }}>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '70%', backgroundColor: '#006CA5', display: 'flex', padding: '7px', fontSize: '14px', fontWeight: 'bold' }}>Total amount </div>
                                                <div style={{ width: '30%', backgroundColor: '#006CA5', display: 'flex', padding: '7px', fontSize: '14px', fontWeight: 'bold', borderLeft: '1px solid black' }}>{(+contextFromPdf?.data?.blackData?.doubleSashSquareFoots + +contextFromPdf?.data?.blackData?.singleSashSquareFoots + +contextFromPdf?.data?.blackData?.twoSashSquareFoots + +contextFromPdf?.data?.blackData?.fixWindowSquareFoots + +contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots) * 50
                                                    + 12000
                                                    + (+contextFromPdf?.data?.blackData?.doubleSashSquareFoots + +contextFromPdf?.data?.blackData?.singleSashSquareFoots + +contextFromPdf?.data?.blackData?.twoSashSquareFoots + +contextFromPdf?.data?.blackData?.fixWindowSquareFoots + +contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots) * mm5()
                                                    + contextFromPdf?.data?.blackData?.singleSashSquareFoots * 2200
                                                    + contextFromPdf?.data?.blackData?.doubleSashSquareFoots * 2100

                                                    + contextFromPdf?.data?.blackData?.twoSashSquareFoots * 2600
                                                    + contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots * 1650
                                                    + contextFromPdf?.data?.blackData?.fixWindowSquareFoots * 900
                                                    + contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots * 2200
                                                    + contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots * 2100

                                                } </div>
                                            </div>



                                        </div>
                                    </div>


                                    {/* SECOND BLOCK */}
                                    <div style={{ width: '100%', display: 'flex', marginTop: '30px', border: '1px solid black' }}>
                                        <div style={{ width: '60%' }}>
                                            <div style={{ fontSize: '18px', fontWeight: 'bold', backgroundColor: 'grey', height: '25px', alignItems: 'center', display: 'flex' }}>Description ( Skypen in black colour )</div>
                                            {contextFromPdf?.data?.blackData?.doubleSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash sliding window with net</div>}
                                            {contextFromPdf?.data?.blackData?.singleSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Single sash openable window</div>}
                                            {contextFromPdf?.data?.blackData?.twoSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Two sash sliding window with Centre Fix and two net sash</div>}
                                            {contextFromPdf?.data?.blackData?.openableVentilator && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Openable ventilator</div>}
                                            {contextFromPdf?.data?.blackData?.fixWindow && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Fix window</div>}
                                            {contextFromPdf?.data?.blackData?.doubleSash80mm && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash sliding window with net ( 80mm frame and 55mm sash )</div>}
                                            {contextFromPdf?.data?.blackData?.doubleSash60mm && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash openable window ( 60mm frame and 60mm sash )</div>}
                                            {(contextFromPdf?.data?.blackData?.fivemmGlass?.twoSeventy ||
                                                contextFromPdf?.data?.blackData?.fivemmGlass?.fourHundred ||
                                                contextFromPdf?.data?.blackData?.fivemmGlass?.sevenHundred) &&
                                                <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>
                                                    {contextFromPdf?.data?.blackData?.fivemmGlass?.twoSeventy ? '5mm plain glass' :
                                                        contextFromPdf?.data?.blackData?.fivemmGlass?.fourHundred ? '5mm plain Tempered glass' :
                                                            contextFromPdf?.data?.blackData?.fivemmGlass?.sevenHundred ? '5mm plain glass + double glaze 8mm spacer + 5mm plain glass + georgion bar' : ''}
                                                </div>
                                            }

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
                                                {contextFromPdf?.data?.blackData?.doubleSash && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSashQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSashSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2300 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSashSquareFoots * 2300}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.blackData?.singleSash && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.singleSashQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.singleSashSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2400 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.singleSashSquareFoots * 2400}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.blackData?.twoSash && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.twoSashQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.twoSashSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2750 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.twoSashSquareFoots * 2750}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.blackData?.openableVentilator && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.openableVentilatorQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>1700 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots * 1700}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.blackData?.fixWindow && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.fixWindowQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.fixWindowSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>1050 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.fixWindowSquareFoots * 1050}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.blackData?.doubleSash80mm && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSash80mmQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2300 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots * 2300}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.blackData?.doubleSash60mm && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSash60mmQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2400 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots * 2400}</div></>}
                                            </div>

                                            {/* 5mm glass */}

                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {
                                                    (contextFromPdf?.data?.blackData?.fivemmGlass?.twoSeventy ||
                                                        contextFromPdf?.data?.blackData?.fivemmGlass?.fourHundred ||
                                                        contextFromPdf?.data?.blackData?.fivemmGlass?.sevenHundred) &&
                                                    <>
                                                        <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.blackData?.doubleSashQuantity + +contextFromPdf?.data?.blackData?.singleSashQuantity + +contextFromPdf?.data?.blackData?.twoSashQuantity + +contextFromPdf?.data?.blackData?.fixWindowQuantity + +contextFromPdf?.data?.blackData?.openableVentilatorQuantity + +contextFromPdf?.data?.blackData?.doubleSash80mmQuantity + +contextFromPdf?.data?.blackData?.doubleSash60mmQuantity} </div>
                                                        <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.blackData?.doubleSashSquareFoots + +contextFromPdf?.data?.blackData?.singleSashSquareFoots + +contextFromPdf?.data?.blackData?.twoSashSquareFoots + +contextFromPdf?.data?.blackData?.fixWindowSquareFoots + +contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots} </div>
                                                        <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{mm5()} </div>
                                                        <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{(+contextFromPdf?.data?.blackData?.doubleSashSquareFoots + +contextFromPdf?.data?.blackData?.singleSashSquareFoots + +contextFromPdf?.data?.blackData?.twoSashSquareFoots + +contextFromPdf?.data?.blackData?.fixWindowSquareFoots + +contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots) * mm5()} </div>
                                                    </>
                                                }
                                            </div>


                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.blackData?.doubleSashQuantity + +contextFromPdf?.data?.blackData?.singleSashQuantity + +contextFromPdf?.data?.blackData?.twoSashQuantity + +contextFromPdf?.data?.blackData?.fixWindowQuantity + +contextFromPdf?.data?.blackData?.openableVentilatorQuantity + +contextFromPdf?.data?.blackData?.doubleSash80mmQuantity + +contextFromPdf?.data?.blackData?.doubleSash60mmQuantity} </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.blackData?.doubleSashSquareFoots + +contextFromPdf?.data?.blackData?.singleSashSquareFoots + +contextFromPdf?.data?.blackData?.twoSashSquareFoots + +contextFromPdf?.data?.blackData?.fixWindowSquareFoots + +contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots} </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>50 </div>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{(+contextFromPdf?.data?.blackData?.doubleSashSquareFoots + +contextFromPdf?.data?.blackData?.singleSashSquareFoots + +contextFromPdf?.data?.blackData?.twoSashSquareFoots + +contextFromPdf?.data?.blackData?.fixWindowSquareFoots + +contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots) * 50}</div>
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>5000</div>
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>  </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>7000</div>
                                            </div>

                                        </div>
                                    </div>

                                    <div style={{ width: '100%', display: 'flex', }}>
                                        <div style={{ width: '60%' }}>

                                        </div>


                                        <div style={{ width: '40%', border: '1px solid black', borderTop: 'none' }}>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '70%', backgroundColor: '#006CA5', display: 'flex', padding: '7px', fontSize: '14px', fontWeight: 'bold' }}>Total amount </div>
                                                <div style={{ width: '30%', backgroundColor: '#006CA5', display: 'flex', padding: '7px', fontSize: '14px', fontWeight: 'bold', borderLeft: '1px solid black' }}>
                                                    {
                                                        (+contextFromPdf?.data?.blackData?.doubleSashSquareFoots + +contextFromPdf?.data?.blackData?.singleSashSquareFoots + +contextFromPdf?.data?.blackData?.twoSashSquareFoots + +contextFromPdf?.data?.blackData?.fixWindowSquareFoots + +contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots) * 50
                                                        + 12000

                                                        + (+contextFromPdf?.data?.blackData?.singleSashSquareFoots * 2400)
                                                        + (+contextFromPdf?.data?.blackData?.doubleSashSquareFoots * 2300)

                                                        + (+contextFromPdf?.data?.blackData?.twoSashSquareFoots * 2750)
                                                        + (+contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots * 1700)
                                                        + (+contextFromPdf?.data?.blackData?.fixWindowSquareFoots * 1050)
                                                        + (+contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots * 2400)
                                                        + (+contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots * 2300)

                                                        + (+contextFromPdf?.data?.blackData?.doubleSashSquareFoots + +contextFromPdf?.data?.blackData?.singleSashSquareFoots + +contextFromPdf?.data?.blackData?.twoSashSquareFoots + +contextFromPdf?.data?.blackData?.fixWindowSquareFoots + +contextFromPdf?.data?.blackData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.blackData?.doubleSash60mmSquareFoots) * mm5()
                                                    }
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </>
                            }
                            {/* THIRD BLOCK */}
                            {

                                contextFromPdf?.data?.whiteColor &&
                                <>

                                    <div style={{ width: '100%', display: 'flex', marginTop: '30px', border: '1px solid black' }}>
                                        <div style={{ width: '60%' }}>
                                            <div style={{ fontSize: '18px', fontWeight: 'bold', backgroundColor: 'grey', height: '25px', alignItems: 'center', display: 'flex' }}>Description ( Turk profile in White colour )</div>
                                            {contextFromPdf?.data?.whiteData?.doubleSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash sliding window with net</div>}
                                            {contextFromPdf?.data?.whiteData?.singleSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Single sash openable window</div>}
                                            {contextFromPdf?.data?.whiteData?.twoSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Two sash sliding window with Centre Fix and two net sash</div>}
                                            {contextFromPdf?.data?.whiteData?.openableVentilator && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Openable ventilator</div>}
                                            {contextFromPdf?.data?.whiteData?.fixWindow && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Fix window</div>}
                                            {contextFromPdf?.data?.whiteData?.doubleSash80mm && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash sliding window with net ( 80mm frame and 55mm sash )</div>}
                                            {contextFromPdf?.data?.whiteData?.doubleSash60mm && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash openable window ( 60mm frame and 60mm sash )</div>}
                                            {(contextFromPdf?.data?.whiteData?.fivemmGlass?.twoSeventy ||
                                                contextFromPdf?.data?.whiteData?.fivemmGlass?.fourHundred ||
                                                contextFromPdf?.data?.whiteData?.fivemmGlass?.sevenHundred) &&
                                                <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>
                                                    {contextFromPdf?.data?.whiteData?.fivemmGlass?.twoSeventy ? '5mm plain glass' :
                                                        contextFromPdf?.data?.whiteData?.fivemmGlass?.fourHundred ? '5mm plain Tempered glass' :
                                                            contextFromPdf?.data?.whiteData?.fivemmGlass?.sevenHundred ? '5mm plain glass + double glaze 8mm spacer + 5mm plain glass + georgion bar' : ''}
                                                </div>
                                            }

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
                                                {contextFromPdf?.data?.whiteData?.doubleSash && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSashQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSashSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>1100 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSashSquareFoots * 1100}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.whiteData?.singleSash && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.singleSashQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.singleSashSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2200 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.singleSashSquareFoots * 2200}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.whiteData?.twoSash && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.twoSashQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.twoSashSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2600 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.twoSashSquareFoots * 2600}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.whiteData?.openableVentilator && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.openableVentilatorQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>1650 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots * 1650}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.whiteData?.fixWindow && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.fixWindowQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.fixWindowSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>900 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.fixWindowSquareFoots * 900}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.whiteData?.doubleSash80mm && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSash80mmQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2100 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots * 2100}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.whiteData?.doubleSash60mm && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSash60mmQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2200 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots * 2200}</div></>}
                                            </div>

                                            {/* 5mm glass */}

                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {
                                                    (contextFromPdf?.data?.whiteData?.fivemmGlass?.twoSeventy ||
                                                        contextFromPdf?.data?.whiteData?.fivemmGlass?.fourHundred ||
                                                        contextFromPdf?.data?.whiteData?.fivemmGlass?.sevenHundred) &&
                                                    <>
                                                        <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.whiteData?.doubleSashQuantity + +contextFromPdf?.data?.whiteData?.singleSashQuantity + +contextFromPdf?.data?.whiteData?.twoSashQuantity + +contextFromPdf?.data?.whiteData?.fixWindowQuantity + +contextFromPdf?.data?.whiteData?.openableVentilatorQuantity + +contextFromPdf?.data?.whiteData?.doubleSash80mmQuantity + +contextFromPdf?.data?.whiteData?.doubleSash60mmQuantity} </div>
                                                        <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.whiteData?.doubleSashSquareFoots + +contextFromPdf?.data?.whiteData?.singleSashSquareFoots + +contextFromPdf?.data?.whiteData?.twoSashSquareFoots + +contextFromPdf?.data?.whiteData?.fixWindowSquareFoots + +contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots} </div>
                                                        <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{mm5white()} </div>
                                                        <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{(+contextFromPdf?.data?.whiteData?.doubleSashSquareFoots + +contextFromPdf?.data?.whiteData?.singleSashSquareFoots + +contextFromPdf?.data?.whiteData?.twoSashSquareFoots + +contextFromPdf?.data?.whiteData?.fixWindowSquareFoots + +contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots) * mm5white()} </div>
                                                    </>
                                                }
                                            </div>


                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.whiteData?.doubleSashQuantity + +contextFromPdf?.data?.whiteData?.singleSashQuantity + +contextFromPdf?.data?.whiteData?.twoSashQuantity + +contextFromPdf?.data?.whiteData?.fixWindowQuantity + +contextFromPdf?.data?.whiteData?.openableVentilatorQuantity + +contextFromPdf?.data?.whiteData?.doubleSash80mmQuantity + +contextFromPdf?.data?.whiteData?.doubleSash60mmQuantity} </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.whiteData?.doubleSashSquareFoots + +contextFromPdf?.data?.whiteData?.singleSashSquareFoots + +contextFromPdf?.data?.whiteData?.twoSashSquareFoots + +contextFromPdf?.data?.whiteData?.fixWindowSquareFoots + +contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots} </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>50 </div>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{(+contextFromPdf?.data?.whiteData?.doubleSashSquareFoots + +contextFromPdf?.data?.whiteData?.singleSashSquareFoots + +contextFromPdf?.data?.whiteData?.twoSashSquareFoots + +contextFromPdf?.data?.whiteData?.fixWindowSquareFoots + +contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots) * 50}</div>
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>5000</div>
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>  </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>7000</div>
                                            </div>

                                        </div>
                                    </div>

                                    <div style={{ width: '100%', display: 'flex', }}>
                                        <div style={{ width: '60%' }}>

                                        </div>

                                        <div style={{ width: '40%', border: '1px solid black', borderTop: 'none' }}>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '70%', backgroundColor: '#006CA5', display: 'flex', padding: '7px', fontSize: '14px', fontWeight: 'bold' }}>Total amount </div>
                                                <div style={{ width: '30%', backgroundColor: '#006CA5', display: 'flex', padding: '7px', fontSize: '14px', fontWeight: 'bold', borderLeft: '1px solid black' }}>{(+contextFromPdf?.data?.whiteData?.doubleSashSquareFoots + +contextFromPdf?.data?.whiteData?.singleSashSquareFoots + +contextFromPdf?.data?.whiteData?.twoSashSquareFoots + +contextFromPdf?.data?.whiteData?.fixWindowSquareFoots + +contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots) * 50
                                                    + 12000
                                                    + (+contextFromPdf?.data?.whiteData?.doubleSashSquareFoots + +contextFromPdf?.data?.whiteData?.singleSashSquareFoots + +contextFromPdf?.data?.whiteData?.twoSashSquareFoots + +contextFromPdf?.data?.whiteData?.fixWindowSquareFoots + +contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots) * mm5white()
                                                    + contextFromPdf?.data?.whiteData?.singleSashSquareFoots * 2200
                                                    + contextFromPdf?.data?.whiteData?.doubleSashSquareFoots * 1100

                                                    + contextFromPdf?.data?.whiteData?.twoSashSquareFoots * 2600
                                                    + contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots * 1650
                                                    + contextFromPdf?.data?.whiteData?.fixWindowSquareFoots * 900
                                                    + contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots * 2200
                                                    + contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots * 2100

                                                } </div>
                                            </div>



                                        </div>
                                    </div>


                                    {/* FOURTH BLOCK */}

                                    <div style={{ width: '100%', display: 'flex', marginTop: '30px', border: '1px solid black' }}>
                                        <div style={{ width: '60%' }}>
                                            <div style={{ fontSize: '18px', fontWeight: 'bold', backgroundColor: 'grey', height: '25px', alignItems: 'center', display: 'flex' }}>Description ( Skypen in White colour )</div>
                                            {contextFromPdf?.data?.whiteData?.doubleSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash sliding window with net</div>}
                                            {contextFromPdf?.data?.whiteData?.singleSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Single sash openable window</div>}
                                            {contextFromPdf?.data?.whiteData?.twoSash && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Two sash sliding window with Centre Fix and two net sash</div>}
                                            {contextFromPdf?.data?.whiteData?.openableVentilator && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Openable ventilator</div>}
                                            {contextFromPdf?.data?.whiteData?.fixWindow && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Fix window</div>}
                                            {contextFromPdf?.data?.whiteData?.doubleSash80mm && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash sliding window with net ( 80mm frame and 55mm sash )</div>}
                                            {contextFromPdf?.data?.whiteData?.doubleSash60mm && <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>Double sash openable window ( 60mm frame and 60mm sash )</div>}
                                            {(contextFromPdf?.data?.whiteData?.fivemmGlass?.twoSeventy ||
                                                contextFromPdf?.data?.whiteData?.fivemmGlass?.fourHundred ||
                                                contextFromPdf?.data?.whiteData?.fivemmGlass?.sevenHundred) &&
                                                <div style={{ paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', }}>
                                                    {contextFromPdf?.data?.whiteData?.fivemmGlass?.twoSeventy ? '5mm plain glass' :
                                                        contextFromPdf?.data?.whiteData?.fivemmGlass?.fourHundred ? '5mm plain Tempered glass' :
                                                            contextFromPdf?.data?.whiteData?.fivemmGlass?.sevenHundred ? '5mm plain glass + double glaze 8mm spacer + 5mm plain glass + georgion bar' : ''}
                                                </div>
                                            }

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
                                                {contextFromPdf?.data?.whiteData?.doubleSash && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSashQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSashSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>1100 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSashSquareFoots * 1100}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.whiteData?.singleSash && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.singleSashQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.singleSashSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2400 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.singleSashSquareFoots * 2400}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.whiteData?.twoSash && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.twoSashQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.twoSashSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2750 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.twoSashSquareFoots * 2750}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.whiteData?.openableVentilator && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.openableVentilatorQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>1700 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots * 1700}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.whiteData?.fixWindow && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.fixWindowQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.fixWindowSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>1050 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.fixWindowSquareFoots * 1050}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.whiteData?.doubleSash80mm && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSash80mmQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2300 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots * 2300}</div></>}
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {contextFromPdf?.data?.whiteData?.doubleSash60mm && <>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSash60mmQuantity} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots} </div>
                                                    <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>2400 </div>
                                                    <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots * 2400}</div></>}
                                            </div>

                                            {/* 5mm glass */}

                                            <div style={{ width: '100%', display: 'flex' }}>
                                                {
                                                    (contextFromPdf?.data?.whiteData?.fivemmGlass?.twoSeventy ||
                                                        contextFromPdf?.data?.whiteData?.fivemmGlass?.fourHundred ||
                                                        contextFromPdf?.data?.whiteData?.fivemmGlass?.sevenHundred) &&
                                                    <>
                                                        <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.whiteData?.doubleSashQuantity + +contextFromPdf?.data?.whiteData?.singleSashQuantity + +contextFromPdf?.data?.whiteData?.twoSashQuantity + +contextFromPdf?.data?.whiteData?.fixWindowQuantity + +contextFromPdf?.data?.whiteData?.openableVentilatorQuantity + +contextFromPdf?.data?.whiteData?.doubleSash80mmQuantity + +contextFromPdf?.data?.whiteData?.doubleSash60mmQuantity} </div>
                                                        <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.whiteData?.doubleSashSquareFoots + +contextFromPdf?.data?.whiteData?.singleSashSquareFoots + +contextFromPdf?.data?.whiteData?.twoSashSquareFoots + +contextFromPdf?.data?.whiteData?.fixWindowSquareFoots + +contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots} </div>
                                                        <div style={{ width: '20%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{mm5white()} </div>
                                                        <div style={{ width: '30%', fontWeight: 'bold', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{(+contextFromPdf?.data?.whiteData?.doubleSashSquareFoots + +contextFromPdf?.data?.whiteData?.singleSashSquareFoots + +contextFromPdf?.data?.whiteData?.twoSashSquareFoots + +contextFromPdf?.data?.whiteData?.fixWindowSquareFoots + +contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots) * mm5white()} </div>
                                                    </>
                                                }
                                            </div>


                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.whiteData?.doubleSashQuantity + +contextFromPdf?.data?.whiteData?.singleSashQuantity + +contextFromPdf?.data?.whiteData?.twoSashQuantity + +contextFromPdf?.data?.whiteData?.fixWindowQuantity + +contextFromPdf?.data?.whiteData?.openableVentilatorQuantity + +contextFromPdf?.data?.whiteData?.doubleSash80mmQuantity + +contextFromPdf?.data?.whiteData?.doubleSash60mmQuantity} </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{+contextFromPdf?.data?.whiteData?.doubleSashSquareFoots + +contextFromPdf?.data?.whiteData?.singleSashSquareFoots + +contextFromPdf?.data?.whiteData?.twoSashSquareFoots + +contextFromPdf?.data?.whiteData?.fixWindowSquareFoots + +contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots} </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>50 </div>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>{(+contextFromPdf?.data?.whiteData?.doubleSashSquareFoots + +contextFromPdf?.data?.whiteData?.singleSashSquareFoots + +contextFromPdf?.data?.whiteData?.twoSashSquareFoots + +contextFromPdf?.data?.whiteData?.fixWindowSquareFoots + +contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots) * 50}</div>
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>5000</div>
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>  </div>
                                                <div style={{ width: '20%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}> </div>
                                                <div style={{ width: '30%', fontWeight: 'bold', display: 'flex', backgroundColor: 'lightgray', paddingLeft: '2px', height: '25px', alignItems: 'center', display: 'flex', fontSize: '16px' }}>7000</div>
                                            </div>

                                        </div>
                                    </div>

                                    <div style={{ width: '100%', display: 'flex', }}>
                                        <div style={{ width: '60%' }}>

                                        </div>


                                        <div style={{ width: '40%', border: '1px solid black', borderTop: 'none' }}>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '70%', backgroundColor: '#006CA5', display: 'flex', padding: '7px', fontSize: '14px', fontWeight: 'bold' }}>Total amount </div>
                                                <div style={{ width: '30%', backgroundColor: '#006CA5', display: 'flex', padding: '7px', fontSize: '14px', fontWeight: 'bold', borderLeft: '1px solid black' }}>
                                                    {
                                                        (+contextFromPdf?.data?.whiteData?.doubleSashSquareFoots + +contextFromPdf?.data?.whiteData?.singleSashSquareFoots + +contextFromPdf?.data?.whiteData?.twoSashSquareFoots + +contextFromPdf?.data?.whiteData?.fixWindowSquareFoots + +contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots) * 50
                                                        + 12000

                                                        + (+contextFromPdf?.data?.whiteData?.singleSashSquareFoots * 2400)
                                                        + (+contextFromPdf?.data?.whiteData?.doubleSashSquareFoots * 1100)

                                                        + (+contextFromPdf?.data?.whiteData?.twoSashSquareFoots * 2750)
                                                        + (+contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots * 1700)
                                                        + (+contextFromPdf?.data?.whiteData?.fixWindowSquareFoots * 1050)
                                                        + (+contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots * 2400)
                                                        + (+contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots * 2300)

                                                        + (+contextFromPdf?.data?.whiteData?.doubleSashSquareFoots + +contextFromPdf?.data?.whiteData?.singleSashSquareFoots + +contextFromPdf?.data?.whiteData?.twoSashSquareFoots + +contextFromPdf?.data?.whiteData?.fixWindowSquareFoots + +contextFromPdf?.data?.whiteData?.openableVentilatorSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash80mmSquareFoots + +contextFromPdf?.data?.whiteData?.doubleSash60mmSquareFoots) * mm5white()
                                                    }
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </>
                            }

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
