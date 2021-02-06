import React from 'react'
import {
    Home as HomeIcon,
    FilterNone as UIElementsIcon,
    BorderAll as TableIcon,
    QuestionAnswer as SupportIcon,
    LibraryBooks as LibraryIcon,
    HelpOutline as FAQIcon,
    BarChart as ChartIcon,
    Map as MapIcon,
    Apps as CoreIcon,
    Description as DescriptionIcon,
    ShoppingCart as ShoppingCartIcon,
    StarBorder as ExtraIcon,
    Chat as ChatIcon,
    Add as AddSectionIcon,
    FolderOpen as FolderIcon,
    Description as DocumentationIcon,
    Person as UserIcon,
    AccountCircle as ProfileIcon,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const structure = [
    { id: 0, label: 'Dashboard', link: '/app/dashboard', icon: <HomeIcon /> },
    { id: 100, label: 'Profile', link: '/app/profile', icon: <ProfileIcon /> },
    { id: 7, label: 'Rewards', link: '/app/ecommerce/gridproducts', icon: <ShoppingCartIcon /> },
    { id: 2, type: 'divider' },
    { id: 3, type: 'title', label: 'HELP' },
    { id: 4, label: 'Library', link: '', icon: <LibraryIcon /> },
    { id: 5, label: 'Feedback', link: '', icon: <SupportIcon /> },
    { id: 6, label: 'FAQ', link: '', icon: <FAQIcon /> },
    { id: 14, type: 'divider' },
]

function AddSection() {
    const useStyles = makeStyles(theme => ({
        root: {
            backgroundColor: theme.palette.secondary.main,
            borderRadius: '50%',
            height: 30,
            width: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
        },
    }))

    const classes = useStyles()

    return (
        <section className={classes.root}>
            <AddSectionIcon />
        </section>
    )
}

export default structure
