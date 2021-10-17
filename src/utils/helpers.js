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
    currencyIcons: ( currency ) => {
    const gallery = {
			won: 'fas fa-won-sign',
			yen: 'fas fa-yen-sign',
			shekel: 'fas fa-shekel-sign',
			rupee: 'fas fa-rupee-sign',
			ruble: 'fas fa-ruble-sign',
			pound: 'fas fa-pound-sign',
			dollar: 'fas fa-dollar-sign',
			euro: 'fas fa-euro-sign',
			lira: 'fas fa-lira-sign',
    };
    return gallery[currency] ? gallery[currency] : 'far fa-edit'
  },
  breakdownCategory: ( c, d ) => {
    const accountNames = c?.accounts
      ?.flatMap( ( a ) => a.name );
    // console.log(`accountNames`, accountNames)
    const obj = {};
    const accts = c.accounts.map((acct) => {
        if (acct.items.length) {
            obj[acct.name] = acct.items
                ?.flatMap((a) => a.values)
                .filter((v) => v.dated == d)
                .flatMap((v) => v.amount)
                .reduce((a, c) => a + c,0);
        } else {
        }
        return obj;
    } );
    console.log(`obj`, obj)
    
    return accountNames.map((d,i)=>obj[d]);
  },
  finalSum: ( cats ) => {
    const groupByCategory= (c) => {
      const datesArr = c?.accounts
        ?.flatMap((a) => a.items)
        ?.flatMap((i) => i.values)
        ?.flatMap((i) => i.dated);

      const datesSet = new Set(datesArr);
      const dates = Array.from(datesSet);

      const obj = {};
      const accts = dates.map((d) => {
        const items = c.accounts.flatMap((a) => a.items);
        const sums = (obj[d] = items
          .flatMap((a) => a.values)
          .filter((v) => v.dated == d)
          .flatMap((v) => v.amount)
          .reduce((a, c) => a + c));

        if (items.length) {
          obj[d] =  sums
        } else {
        }
        return obj;
      });
      return dates.map((d) => {return{date: d.toString(), sign: c.sign,total:obj[d]}});
    };
    const datesArray = ( c ) => {
  
    const datesArr = c?.accounts
      ?.flatMap( ( a ) => a.items )
      ?.flatMap( ( i ) => i.values )
      ?.flatMap( ( i ) => i.dated )

    const datesSet = new Set( datesArr )
    const dates = Array.from( datesSet )
    return dates
    };

    const flat = cats
      .flatMap( ( c ) => groupByCategory( c ) );
    const dates = datesArray(cats[0]);
    // console.log(`dates`, dates)
    const signsSet = new Set( flat.map( ( r ) => r.sign ) );
    const signs = Array.from( signsSet );
    // console.log(`signs`, signs)
    const res = []
    dates.forEach( d => {
      let sum = 0;
      const filtered = flat.filter( r => r.date == d );
      // console.log(`filtered`, filtered)
      filtered.forEach( f => {
        if (f.sign == 'plus') {
					sum = sum + f.total;
        }
        if ( f.sign == 'minus' ) {
					sum = sum - f.total;
				}
      })
      res.push( sum );
      
    } )
    // console.log(`res`, res)'
    return res;
  },
  genColors: ( i ) => [
      'rgba(141,211,199, 0.5)' ,
      'rgba(251,128,114, 0.5)' ,
      'rgba(190,186,218, 0.5)' ,
      'rgba(255,255,179, 0.5)' ,
      'rgba(128,177,211, 0.5)' ,
      'rgba(253,180,98, 0.5)' ,
      'rgba(179,222,105, 0.5)' ,
      'rgba(252,205,229, 0.5)' ,
      'rgba(217, 217, 217, 0.5)',
      'rgba(166,206,227, 0.5)' ,
      'rgba(31,120,180, 0.5)' ,
      'rgba(178,223,138, 0.5)' ,
      'rgba(51,160,44, 0.5)' ,
      'rgba(251,154,153, 0.5)' ,
      'rgba(227,26,28, 0.5)' ,
      'rgba(253,191,111, 0.5)' ,
      'rgba(255,127,0, 0.5)' ,
      'rgba(202,178,21, 0.5)' ,
  ][ i ],
  datesArray: ( c ) => {
    
		const datesArr = c?.accounts
			?.flatMap((a) => a.items)
			?.flatMap((i) => i.values)
			?.flatMap((i) => i.dated);

		const datesSet = new Set(datesArr);
		const dates = Array.from(datesSet);
    return dates;
  },
	groupByAccount: (acct) => {
		const datesArr = acct.items
			?.flatMap((i) => i.values)
			?.flatMap((i) => i.dated);

		const datesSet = new Set(datesArr);
		const dates = Array.from(datesSet);

		const obj = {};
		const accts = dates.map((d) => {
			if (acct.items.length) {
				obj[d] = 
					acct.items
						?.flatMap((a) => a.values)
						.filter((v) => v.dated == d)
						.flatMap((v) => v.amount)
						.reduce((a, c) => a + c)
				;
			} else {
			}
			return obj;
		});

		// console.log(`accts`, accts);

		return dates.map((d) => obj[d]);
	},
	groupByCategory: (c) => {
		const datesArr = c?.accounts
			?.flatMap((a) => a.items)
			?.flatMap((i) => i.values)
			?.flatMap((i) => i.dated);

		const datesSet = new Set(datesArr);
		const dates = Array.from(datesSet);

		const obj = {};
		const accts = dates.map((d) => {
			const items = c.accounts.flatMap((a) => a.items);
			const sums = (obj[d] = items
				.flatMap((a) => a.values)
				.filter((v) => v.dated == d)
				.flatMap((v) => v.amount)
				.reduce((a, c) => a + c));

			if (items.length) {
				obj[d] =  sums
			} else {
			}
			return obj;
		});

		// console.log(`accts`, accts[0])

		return dates.map((d) => obj[d]);
	},
	styleAmount: (sign) => {
		const d = {
			plus: '',
			minus: ' text-danger'
		};
		return d[sign];
	},
	calculate_progress: (need, coll) => {
		return Math.floor((coll / need) * 100);
	}
};
