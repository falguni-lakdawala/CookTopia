import React from 'react';
import searchIcon from '../../assets/icons/search-icon.svg';

const Search = ( { screenType } ) => {
	return (
		<div className="search">
			<button role="button" aria-label="search" title="search"
				type="button"
				className="search-btn"
				onClick={() => {
					if (screenType === 1) {
						document.querySelectorAll('.search')[0].classList.toggle('active')
					} else if (screenType === 2) {
						document.querySelectorAll('.search')[1].classList.toggle('active')
					}
				}}
			>
				<svg className="svg-1" width="536" height="598" viewBox="0 0 536 598" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M531.842 571.966C525.243 564.032 518.573 556.099 511.974 548.165C496.038 529.069 480.102 510.043 464.166 490.946C444.86 467.848 425.624 444.82 406.319 421.722C389.61 401.783 372.972 381.774 356.264 361.835C351.139 355.727 346.155 349.478 341.03 343.37C380.063 313.04 407.021 269.02 412.918 217.979C425.133 112.247 342.855 15.6412 229.547 2.58255C116.24 -10.4761 14.1644 64.8566 1.94912 170.519C-10.2662 276.181 72.0118 372.787 185.319 385.846C231.583 391.181 276.022 381.774 313.159 361.554C317.091 366.187 320.952 370.891 324.883 375.525C340.819 394.622 356.755 413.648 372.691 432.744C391.997 455.842 411.233 478.871 430.539 501.969C447.247 521.908 463.885 541.917 480.593 561.856C488.737 571.544 496.53 581.584 505.024 591.062C505.164 591.203 505.235 591.343 505.375 591.483C510.921 598.083 522.434 599.768 529.314 594.222C536.264 588.675 537.739 579.057 531.842 571.966ZM35.8572 174.451C46.0366 86.1997 131.263 23.2236 225.897 34.1759C320.53 45.0581 389.189 125.727 379.01 213.977C368.83 302.228 283.604 365.205 188.97 354.252C94.3363 343.37 25.6777 262.702 35.8572 174.451Z" fill="black" stroke="#010101" strokeWidth="1" strokeMiterlimit="10"/>
				</svg>
				<svg className="svg-2" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.25 30.25C23.982 30.25 30.25 23.982 30.25 16.25C30.25 8.51801 23.982 2.25 16.25 2.25C8.51801 2.25 2.25 8.51801 2.25 16.25C2.25 23.982 8.51801 30.25 16.25 30.25Z" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M33.7492 33.7492L26.1367 26.1367" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
			<input aria-label="input search text" type="search" />
		</div>
	)
}

export default Search;
