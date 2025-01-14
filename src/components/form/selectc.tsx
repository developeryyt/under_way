'use client';
import Buttonc from "@/components/form/buttonc";
import styles from './selectc.module.scss';
import {useState} from "react";

const SelectC = () => {

    const arr = Array.from({length: 9}, (_, i) => i + 1);
    const [line, setLine] = useState(0)
    const [open, setOpen] = useState(false);

    return (
        <div className={styles?.['custom_select']}>
            <div
                className={styles?.['selected']}
            >
                <Buttonc
                    onClick={() => {
                        setOpen(prev => !prev);
                    }}
                    type='button'
                    text={line > 0 ? `${line.toString()} 호선` : '호선을 선택해주세요.'}
                    className={line === arr[line - 1] ? styles[`line_${line}`] : ''}
                />
            </div>
            <ul
                className={styles?.['select_list']}
                style={{
                    display: open ? 'block' : 'none'
                }}
            >
                {arr.map((item) => {
                    return (
                        <li
                            key={`customize_select_${item}`}
                        >
                            <Buttonc
                                onClick={() => {
                                    setLine(item)
                                    setOpen(false)
                                }}
                                type='button'
                                text={`${item.toString()} 호선`}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SelectC;