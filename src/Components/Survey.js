import { IoMdRadioButtonOn } from 'react-icons/io';
import { FcRating } from 'react-icons/fc'
import { TfiCheckBox } from 'react-icons/tfi'
import { BiServer, BiMenuAltLeft, } from 'react-icons/bi'
import { GoFileSubmodule } from 'react-icons/go'
import { ImFilePicture } from 'react-icons/im'
import { CiViewList, CiServer, CiSquarePlus, CiGrid32, CiMoneyCheck1 } from 'react-icons/ci'
import { BsFullscreen, BsUiRadiosGrid, BsGrid3X3Gap, BsUiRadios, BsCodeSlash, BsStar, BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import { TbMathFunction } from 'react-icons/tb'
import { VscFileSymlinkDirectory } from 'react-icons/vsc'
import { RiImageFill } from 'react-icons/ri'
import { FaSignature } from 'react-icons/fa'
import Radiogroup from './Radiogroup'
import Rating from './Rating'
import Checkbox from './Checkbox'
import Dropdown from './Dropdown'
import Tagbox from './Tagbox'
import Boolean from './Boolean'
import File from './File'
import ImagePicker from './ImagePicker'
import Ranking from './Ranking'
import Single from './Single'
import Comment from './Comment'
import Panel from './Panel'
import Dynamic from './Dynamic'
import Multiple from './Multiple'
import Singlechoice from './Singlechoice'
import MultipleChoice from './MultipleChoice'
import Dynamicmatrix from './Dynamicmatrix'
import Expression from './Expression'
import Html from './Html'
import Signature from './Signature'
import Image from './Image'


export const survey = [
    {
        title: 'Designer',
        id: 1,
        content: [{
            forms: [{
                title: 'Radiogroup',
                icons: <IoMdRadioButtonOn />,
                data: <Radiogroup />
            },
            {
                title: 'Rating',
                icons: <BsStar />,
                data: <Rating />
            },
            {
                title: 'Checkbox',
                icons: <TfiCheckBox />,
                data: <Checkbox />
            },
            {
                title: 'Dropdown',
                icons: <BsReverseLayoutTextWindowReverse />,
                data: <Dropdown />
            },
            {
                title: 'Tag Box',
                icons: <BiServer />,
                data: <Tagbox />
            },
            {
                title: 'Boolean',
                icons: <CiGrid32 />,
                data: <Boolean />
            },
            {
                title: 'File',
                icons: <VscFileSymlinkDirectory />,
                data: <File />
            },
            {
                title: 'Image Picker',
                icons: <ImFilePicture />,
                data: <ImagePicker />
            },
            {
                title: 'ranking',
                icons: <BiMenuAltLeft />,
                data: <Ranking />
            }, {
                title: 'Single Input',
                icons: <CiMoneyCheck1 />,
                data: <Single />
            },
            {
                title: 'Comment',
                icons: <CiViewList />,
                data: <Comment />
            },
            {
                title: 'Multiple Text',
                icons: <CiServer />,
                data: <Multiple />
            },
            {
                title: 'Panel',
                icons: <BsFullscreen />,
                data: <Panel />
            },
            {
                title: 'Dynamic Panel',
                icons: <CiSquarePlus />,
                data: <Dynamic />
            }, {
                title: 'Single-Choice Matrix',
                icons: <BsUiRadiosGrid />,
                data: <Singlechoice />
            },
            {
                title: 'Multiple Choice Matrix',
                icons: <BsGrid3X3Gap />,
                data: <MultipleChoice />
            },
            {
                title: 'Dynamic Matrix',
                icons: <BsUiRadios />,
                data: <Dynamicmatrix />
            },
            {
                title: 'HTML',
                icons: <BsCodeSlash />,
                data: <Html />
            },
            {
                title: 'Expression(read-only)',
                icons: <TbMathFunction />,
                data: <Expression />
            },
            {
                title: 'Image',
                icons: <RiImageFill />,
                data: <Image />
            },
            {
                title: 'Signature Pad',
                icons: <FaSignature />,
                data: <Signature />
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