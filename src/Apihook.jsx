import { useState, useEffect } from "react";
import axios from "axios";
import * as Colors from "@mui/material/colors";
export const useQuote = (url) => {
    const [bgColor, setBgColor] = useState('');
    const [quote, setQuote] = useState({});
    const [disablebtn, setDisablebtn] = useState(true);
    const [isloading, setIsloading] = useState(true);
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setQuote(res.data);
                const MUiColors = Object.values(Colors);
                const specifiColors = Object.values(MUiColors[Math.floor(Math.random() * MUiColors.length)]);
                setBgColor(() => specifiColors[Math.floor(Math.random() * specifiColors.length)]);
                setDisablebtn(false);
            })
            .catch(() => setDisablebtn(true))
            .finally(() => setIsloading(false))
    }, [url])
    return { quote, bgColor, disablebtn, isloading }
}