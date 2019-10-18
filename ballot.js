const ballot = [ "Michael","Harry","Dave","Michael","Victor","Harry","Alex","Mary","Mary","Alex"]


const writeIn=(ballot)=> {
    let voteSummary = {};
    let max = 0;
    let charRepresentative = '';

    for(let i=0; i< ballot.length; i++) {
        if(voteSummary[ballot[i]] === undefined) {
            voteSummary[ballot[i]] = 1;
        } else if(voteSummary[ballot[i]] >=1) {
            voteSummary[ballot[i]]++;
            if(voteSummary[ballot[i]] >= max) {
                max = voteSummary[ballot[i]]
                charRepresentative = ballot[i]
            }
        }
    }
    console.log(charRepresentative);
    console.log(voteSummary);
}


writeIn(ballot)