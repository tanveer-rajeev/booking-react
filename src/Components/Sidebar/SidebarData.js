import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
export const SidebarData = [
    {
        title: "Profile",
        path:'/home',
        icon:<AiIcons.AiFillHome/>,
        iconClosed:<RiIcons.RiArrowDownFill/>,
        iconOpened:<RiIcons.RiArrowUpFill/>,
        subNav:[
            {
                title: "Scheduler",
                path:'/login',
                icon:<RiIcons.RiTodoLine/>,
            }
        ]
    },
    {
        title: "Booking",
        path:'/booking',
        icon:<BsIcons.BsListTask/>
    },
    {
        title: "Rooms",
        path:'/rooms',
        icon:<BsIcons.BsList/>
    }
]
