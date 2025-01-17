'use client';
import Buttonc from "@/components/form/buttonc";
import styles from './selectc.module.scss';
import {useState} from "react";
import {LineCode} from "@/types";


const SelectC = ({ line, handler }: { line: string, handler: (param: string) => void }) => {

    // console.log(Object.values(LineCode), 'key')
    const arr: LineCode[] = Object.values(LineCode);

    const [open, setOpen] = useState<boolean>(false);

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
                    text={line.length > 0 ? line : '호선을 선택해주세요.'}
                />
            </div>
            <div className={styles?.['list_wrapper']}>
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
                                        handler(item)
                                        setOpen(false)
                                    }}
                                    type='button'
                                    text={item}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SelectC;