import React from "react";
import { FloatButton } from "antd";
import {SoundOutlined} from '@ant-design/icons'
const AudioIcon = () => <FloatButton onClick={() => console.log("onClick")} icon ={<SoundOutlined />} />;
export default AudioIcon;
