class Solution {
    //graph dfs
    public boolean isBipartite(int[][] graph) {
        int N=graph.length;
        int[] colors= new int[N];
        for(int i=0;i<N;i++){
            //NOT marked and can not color correctly
            if(colors[i]==0 && !dfs(graph,colors,1,i)){ //use 1,-1 to indicate two colors
                return false;
            }
        }
        return true;
    }
    
    public boolean dfs(int[][] graph, int[] colors, int color, int i){
        //colored and not the correct color
        if(colors[i]!=0){
            return colors[i]==color;
        } 
        
        colors[i]=color; //assign current color;
        for(int nei:graph[i]){
            if(!dfs(graph,colors,-color,nei)) return false;
        }
        return true;
    }
}