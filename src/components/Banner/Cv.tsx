import React, {useState} from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Download from "yet-another-react-lightbox/plugins/download";
import {RiFilePaper2Line} from "react-icons/ri";

type CvType = {
    cv: string[]
}

const Cv = ({cv} : CvType) => {

    const [open2, setOpen2] = useState(false);

    return (
        <div>
            <div
                onClick={() => setOpen2(true)}
                className='cursor-pointer'>
                <RiFilePaper2Line/>
            </div>
            <Lightbox
                open={open2}
                close={() => setOpen2(false)}
                plugins={[Download]}
                slides={[
                    {
                        src: cv[0],
                        alt: 'CvPl',
                        width: 1600,
                        height: 1200,
                    },
                    {
                        src: cv[1],
                        alt: '',
                        width: 1600,
                        height: 1200,
                    },
                    {
                        src: cv[2],
                        alt: '',
                        width: 1600,
                        height: 1200,
                    }
                ]}
            />
        </div>
    );
};

export default Cv;