import React, {useState} from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type certificateType = {
    singleWord: string
    certificate: string[]
}
const Certificate = ({singleWord, certificate}: certificateType) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                className='btn btn-lg'
                type='button'
                onClick={() => setOpen(true)}>
                {singleWord}
            </button>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[Thumbnails]}
                slides={[
                    {
                        src: certificate[0],
                        alt: 'Slide 1',
                        width: 1200,
                        height: 800,
                    },
                    {
                        src: certificate[1],
                        alt: 'Slide 2',
                        width: 1200,
                        height: 800,
                    },
                    {
                        src: certificate[2],
                        alt: 'Slide 3',
                        width: 1200,
                        height: 800,
                    },
                    {
                        src: certificate[3],
                        alt: 'Slide 4',
                        width: 1200,
                        height: 800,
                    },
                    {
                        src: certificate[4],
                        alt: 'Slide 5',
                        width: 1200,
                        height: 800,
                    }
                ]}

            />
        </div>
    );
};

export default Certificate;