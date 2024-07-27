// complete the given function

function palindrome(str){
	let s="";
    for(let i=0;i<str.length;i++)
		{
			s=str.charAt(i)+s;
		}
	if(str.equalsTo(s))
	{
		return true;
	}
	return false;
}
module.exports = palindrome
