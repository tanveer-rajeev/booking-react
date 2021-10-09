import React, {useState} from 'react';
import {SidebarData} from "./SidebarData";
import './Sidebar.css'
import TimePicker from "react-time-picker";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
    const [value, onChange] = useState('10:00');

    return (
        <div className="sidebar ">
            <div className="">
                <ul >
                    {
                        SidebarData.map((item, key) => {
                            return <SidebarMenu key={key} item={item}  />
                        })
                    }
                </ul>
            </div>
            {/*<div className="col-md-9">*/}

            {/*        <TimePicker*/}
            {/*            onChange={onChange}*/}
            {/*            value={value}*/}
            {/*        />*/}

            {/*</div>*/}
        </div>
    );
};

export default Sidebar;