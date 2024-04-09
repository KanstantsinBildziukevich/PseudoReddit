import React, {useCallback, useState} from 'react';
import { Link } from "react-router-dom";
import styles from './DemoPage.module.css'

const Cell = React.memo(({onClick, isGreen, rowIndex, cellIndex}: {onClick: (rowIndex: number, cellIndex: number) => void, isGreen: boolean, rowIndex: number, cellIndex: number}) => {
    console.log('Warningig!');
    return (
        <td
            onClick= {() => {onClick(rowIndex, cellIndex)}}
            style={{ backgroundColor: isGreen ? 'green' : 'white' }}
        />
    )
})

const TableComponent = () => {
    const [rows, setRows] = useState(() => {
        return Array.from({ length: 100 }, () => Array.from({ length: 100 }, () => false));
    });

    const toggleCellState = useCallback((rowIndex: number, cellIndex: number) => {
        setRows(prevRows => {
            const newRows = [...prevRows];
            newRows[rowIndex] = [...prevRows[rowIndex]];
            newRows[rowIndex][cellIndex] = !newRows[rowIndex][cellIndex];
            return newRows;
        });
    }, []);

    const renderCells = (rowIndex: number) => {
        return rows[rowIndex].map((isGreen, cellIndex) => (
            <Cell
                key={cellIndex}
                onClick={toggleCellState}
                isGreen={isGreen}
                rowIndex={rowIndex}
                cellIndex={cellIndex}
            />
        ));
    };

    const renderRows = () => {
        return rows.map((row, index) => (
            <tr key={index}>
                {renderCells(index)}
            </tr>
        ));
    };

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.tableStyles}>
                <tbody>
                {renderRows()}
                </tbody>
            </table>
            <p className={styles.tableText}>Green Cells: {rows.flat().filter(state => state).length}</p>
        </div>
    );
};

export function DemoPage() {
    return (
        <div className={styles.tablePage}>
            <TableComponent />
            <Link to="/" className={styles.tableLink}>Homecoming</Link>
        </div>
    );
}
