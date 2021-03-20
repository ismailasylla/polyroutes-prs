/** @format */

import React from 'react'
import styles from '../../styles/Layout.module.css'

const Layouts = ({ children }) => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1>Layout</h1>
			</main>
		</div>
	)
}

export default Layouts
