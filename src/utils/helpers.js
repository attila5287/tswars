module.exports = {
    formatAmount: (sign, amount) => {
		// format large numbers with commas
		if (sign == 'minus') {
			return '$ (' + parseInt(amount).toLocaleString() + ')';
		} else {
			return '$ '+parseInt(amount).toLocaleString();
		}
	},
	formatDate: (date) => {
		// Using JavaScript Date methods, we get and format the month, date, and year
		// We need to add one to the month since it is returned as a zero-based value
		return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
			// We add five years to the 'year' value to calculate the end date
			new Date(date).getFullYear() + 5
		}`;
	}, 
 

};
