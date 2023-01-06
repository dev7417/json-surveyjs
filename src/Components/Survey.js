import { IoMdRadioButtonOn } from 'react-icons/io';
import { FcRating } from 'react-icons/fc'
import { TfiCheckBox } from 'react-icons/tfi'
import { BiServer,BiMenuAltLeft, } from 'react-icons/bi'
import { GoFileSubmodule } from 'react-icons/go'
import { ImFilePicture } from 'react-icons/im'
import {CiViewList,CiServer,CiSquarePlus,CiGrid32,CiMoneyCheck1} from 'react-icons/ci'
import {BsFullscreen,BsUiRadiosGrid,BsGrid3X3Gap,BsUiRadios,BsCodeSlash} from 'react-icons/bs'
import {TbMathFunction} from 'react-icons/tb'
import {RiImageFill} from 'react-icons/ri'
import {FaSignature} from 'react-icons/fa'
export const survey = [
    {
        title: 'Designer',
        id: 1,
        content: [{
            forms: [{
                title: 'Radiogroup',
                icons: <IoMdRadioButtonOn />
            },
            {
                title: 'Rating',
                icons: <FcRating />
            },
            {
                title: 'Checkbox',
                icons: <TfiCheckBox />
            },
            {
                title: 'Dropdown',
                icons: <IoMdRadioButtonOn />
            },
            {
                title: 'Tag Box',
                icons: <BiServer />
            },
            {
                title: 'Boolean',
                icons: <CiGrid32 />
            },
            {
                title: 'File',
                icons: <GoFileSubmodule />
            },
            {
                title: 'Image Picker',
                icons: <ImFilePicture />
            },
            {
                title: 'ranking',
                icons: <BiMenuAltLeft />
            }, {
                title: 'Single Input',
                icons: <CiMoneyCheck1 />
            },
            {
                title: 'Comment',
                icons: <CiViewList />
            },
            {
                title: 'Multiple Text',
                icons: <CiServer />
            },
            {
                title: 'Panel',
                icons: <BsFullscreen />
            },
            {
                title: 'Dynamic Panel',
                icons: <CiSquarePlus />
            }, {
                title: 'Single-Choice Matrix',
                icons: <BsUiRadiosGrid />
            },
            {
                title: 'Multiple Choice Matrix',
                icons: <BsGrid3X3Gap />
            },
            {
                title: 'Dynamic Matrix',
                icons: <BsUiRadios />
            },
            {
                title: 'HTML',
                icons: <BsCodeSlash />
            },
            {
                title: 'Expression(read-only)',
                icons: <TbMathFunction />
            },
            {
                title: 'Image',
                icons: <RiImageFill />
            },
            {
                title: 'Signature Pad',
                icons: <FaSignature />
            },
            ]
        }]
    },
    {
        title: 'Preview',
        id: 2,
        content: [{ question: '2' }]
    },
    {
        title: 'Logic',
        id: 3,
        content: [{ question: '3' }]
    },
    {
        title: 'JSON Editor',
        id: 4,
        content: [{ question: '4' }]
    },
    {
        title: 'Embed Survey',
        id: 5,
        content: [{ question: '5' }]
    },
    {
        title: 'Translation',
        id: 6,
        content: [{ question: '6' }]
    },
]