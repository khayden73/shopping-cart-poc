import styles from './Quality.module.css'

interface QuantityProps {
    start?: number,
    max?: number
}

function Quantity({ start = 1, max = 10 }: QuantityProps) {
    return (
        <>
            <label>Quantity: </label>
            <input className={styles.qualityValue} type="number" min={start} max={max} defaultValue={start}/>
        </>
    )
}

export { Quantity };