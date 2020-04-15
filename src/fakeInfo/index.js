import userInfo from './profile';

const fakeInfo = [...userInfo];

const shuffle = a => {
    let temp;

    for(let i = a.length; i; i--){
        let j = Math.floor(Math.random()* i);
        temp = a[i-1];
        a[i-1] = a[j];
        a[j] = temp ;
    }
}

shuffle(fakeInfo);

export default fakeInfo ;