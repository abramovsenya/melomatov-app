import './Button.css';

// export const Button = ({ children, onClick }) => {
// 	return (
// 		<button className='button' onClick={onClick}>
// 			{children}
// 		</button>
// 	);
// };
export const Button = ({ children, onClick, className }) => {
	return (
		<button className={`button ${className}`} onClick={onClick}>
			{children}
		</button>
	);
};

export const ButtonLink = ({ children, href, onClick }) => {
	return (
		<a href={href} className='button' onClick={onClick}>
			{children}
		</a>
	);
};
