import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData=[
    {
        title:'Home',
        path:'/overview',
        icon:<AiIcons.AiFillHome />,
        iconClosed:<RiIcons.RiArrowDownSFill />,
        iconOpened:<RiIcons.RiArrowUpSFill />,
     

    },
    {
        title:'Users',
        path:'/reports',
        icon:<AiIcons.AiFillHome />,
        iconClosed:<RiIcons.RiArrowDownSFill />,
        iconOpened:<RiIcons.RiArrowUpSFill />,
        subNav:[
            {
            title:'Add User',
            path:'/reports/reports1',
            icon:<IoIcons.IoIosPaper />
            },
            {
                title:'Manage Users',
                path:'/reports1/reports2',
                icon:<IoIcons.IoIosPaper />
                }
        ]

    },

]

export default SidebarData;