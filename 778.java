class Solution {
    //Dijkstra. heap. time n^2logn
    public int swimInWater(int[][] grid) {
        int N=grid.length;
        PriorityQueue<int[]> pq = new PriorityQueue<>((a,b)->(a[2]-b[2])); //smallest one first
        pq.add(new int[]{0,0,grid[0][0]});
        boolean[][] visited = new boolean[N][N];
        visited[0][0]=true;
        int[][] dirs = {{0, -1}, {-1, 0}, {0, 1}, {1, 0}};
        int ans=0;
        //Dijkstra
        while(!pq.isEmpty()){
            int[] cur= pq.poll();
            int x=cur[0];
            int y=cur[1];
            int height=cur[2];
            for(int i=0;i<4;i++){
                int nx=x+dirs[i][0];
                int ny=y+dirs[i][1];                
                if(nx<0||nx>=N||ny<0||ny>=N) continue;
                if(visited[nx][ny]) continue;
                int newHeight=Math.max(height,grid[nx][ny]); //get maxHeight between old/new height
                if(nx==N-1&&ny==N-1) return newHeight;
                pq.add(new int[]{nx,ny,newHeight});
                visited[nx][ny]=true;
            }
        }
        return -1;
    }
}