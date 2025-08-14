interface TableProps {
    isZsakos: boolean;
}

export function Table(props: TableProps) {
    return props.isZsakos ? (
        <table>
            <thead>
                <tr>
                    <th style={{ borderRadius: '5px 0px 0px 0px' }}>Zsákok száma (db)</th>
                    <th>Ár (nettó)</th>
                    <th>Rakodási árak földszintről (nettó)</th>
                    <th style={{ borderRadius: '0px 5px 0px 0px' }}>Emeletdíj emeletenként (nettó)</th>
                </tr>
            </thead>
            <tbody>
                <tr className="tr_even">
                    <td>0-10 db</td>
                    <td>17.000 </td>
                    <td>4.500 </td>
                    <td>2.500 </td>
                </tr>
                <tr className="tr_odd">
                    <td>15 db</td>
                    <td>19.000 </td>
                    <td>5.000 </td>
                    <td>3.000 </td>
                </tr>
                <tr className="tr_even">
                    <td>20 db</td>
                    <td>21.000 </td>
                    <td>5.500 </td>
                    <td>3.500 </td>
                </tr>
                <tr className="tr_odd">
                    <td>30 db</td>
                    <td>23.000 </td>
                    <td>6.500 </td>
                    <td>4.500 </td>
                </tr>
                <tr className="tr_even">
                    <td>40 db</td>
                    <td>25.500 </td>
                    <td>7.500 </td>
                    <td>5.500 </td>
                </tr>
                <tr className="tr_odd">
                    <td>50 db</td>
                    <td>28.500 </td>
                    <td>9.000 </td>
                    <td>6.500 </td>
                </tr>
                <tr className="tr_even">
                    <td>60 db</td>
                    <td>31.500 </td>
                    <td>10.000 </td>
                    <td>7.500 </td>
                </tr>
                <tr className="tr_odd">
                    <td>70 db</td>
                    <td>34.000 </td>
                    <td>11.000 </td>
                    <td>8.500 </td>
                </tr>
                <tr className="tr_even">
                    <td>80 db</td>
                    <td>36.500 </td>
                    <td>12.500 </td>
                    <td>10.000 </td>
                </tr>
                <tr className="tr_odd">
                    <td>90 db</td>
                    <td>39.500 </td>
                    <td>13.500 </td>
                    <td>11.000 </td>
                </tr>
                <tr className="tr_even">
                    <td style={{ borderRadius: '0px 0px 0px 5px' }}>100 db</td>
                    <td>42.500 </td>
                    <td>14.500 </td>
                    <td style={{ borderRadius: '0px 0px 5px 0px' }}>12.000 </td>
                </tr>
            </tbody>
        </table>
    ) : (
        <table>
            <thead>
                <tr>
                    <th style={{ borderRadius: '5px 0px 0px 0px' }}>M<sup>3</sup></th>
                    <th style={{ borderRadius: '0px 5px 0px 0px' }}>Ár (nettó)</th>
                </tr>
            </thead>
            <tbody>
                <tr className="tr_even">
                    <td>0.5 m<sup>3</sup></td>
                    <td>17.000 Ft</td>
                </tr>
                <tr className="tr_odd">
                    <td>1 m<sup>3</sup></td>
                    <td>22.800 Ft</td>
                </tr>
                <tr className="tr_even">
                    <td>1.5 m<sup>3</sup></td>
                    <td>26.800 Ft</td>
                </tr>
                <tr className="tr_odd">
                    <td>2 m<sup>3</sup></td>
                    <td>30.800 Ft</td>
                </tr>
                <tr className="tr_even">
                    <td>2.5 m<sup>3</sup></td>
                    <td>34.800 Ft</td>
                </tr>
                <tr className="tr_odd">
                    <td>3 m<sup>3</sup></td>
                    <td>38.800 Ft</td>
                </tr>
                <tr className="tr_even">
                    <td>3.5 m<sup>3</sup></td>
                    <td>42.800 Ft</td>
                </tr>
                <tr className="tr_odd">
                    <td>4 m<sup>3</sup></td>
                    <td>45.800 Ft</td>
                </tr>
                <tr className="tr_even">
                    <td>5 m<sup>3</sup></td>
                    <td>54.800 Ft</td>
                </tr>
                <tr className="tr_odd">
                    <td>6 m<sup>3</sup></td>
                    <td>63.800 Ft</td>
                </tr>
                <tr className="tr_even">
                    <td>7 m<sup>3</sup></td>
                    <td>70.800 Ft</td>
                </tr>
                <tr className="tr_odd">
                    <td style={{ borderRadius: '0px 0px 0px 5px' }}>8 m<sup>3</sup></td>
                    <td style={{ borderRadius: '0px 0px 5px 0px' }}>77.800 Ft</td>
                </tr>
            </tbody>
        </table>
    )
}