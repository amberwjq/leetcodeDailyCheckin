class Solution {
    //bit 
    public int findTheLongestSubstring(String s) {
        char[] vow= new char[]{'a','e','i','o','u'};
        int[] idx= new int[32];
        Arrays.fill(idx,Integer.MAX_VALUE);
        idx[0]=-1; //important: so that the result could calculate from the first letter
        int res=0;
        int state=0;
        for(int i=0;i<s.length();i++){
            for(int j=0;j<5;j++){
                if(s.charAt(i)==vow[j]){//is a vow
                    state^=1<<j; //flip the vow value in state
                }                
            }
            if(idx[state]!=Integer.MAX_VALUE){//happened before
                res=Math.max(res,i-idx[state]);
            }else{
                idx[state]=i;
            }
        }
        return res;
    }
}