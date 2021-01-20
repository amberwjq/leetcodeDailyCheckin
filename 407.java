class Solution {
    //bfs+heap. time m*n*log(mn) --log(mn) is the push time in pq.
    //space mn
    
    //Build point class to avoid coordition calculation
    private class Point{
        int x;
        int y;
        int h;
        public Point(int x, int y, int h){ //NOT void
            this.x=x;
            this.y=y;
            this.h=h;
        }        
    }    
    
    public int trapRainWater(int[][] heightMap) {
        if(heightMap==null||heightMap.length==0||heightMap[0].length==0) return 0;
        int r=heightMap.length;
        int c=heightMap[0].length;
        //pq order by h from small to large
        PriorityQueue<Point> pq= new PriorityQueue<Point>((a,b)->(a.h-b.h));
        //1.push the outer lines into pq 
        for(int i=0;i<r;i++){
            pq.add(new Point(i,0,heightMap[i][0]));
            pq.add(new Point(i,c-1,heightMap[i][c-1]));
            heightMap[i][0]=-1; //use -1 to mark as visited;
            heightMap[i][c-1]=-1; 
        }
        for(int j=1;j<c-1;j++){ //from 1 to c-2 for the corner has been pushed in first loop
            pq.add(new Point(0,j,heightMap[0][j]));
            pq.add(new Point(r-1,j,heightMap[r-1][j]));
            heightMap[0][j]=-1; 
            heightMap[r-1][j]=-1; 
        }
        
        int water=0;
        int[] dx= new int[]{1,-1,0,0};
        int[] dy= new int[]{0,0,1,-1};
        //bfs
        while(!pq.isEmpty()){
            Point cur= pq.poll(); //the smallest in pq
            for(int k=0;k<4;k++){
                int newX=cur.x+dx[k];
                int newY=cur.y+dy[k];
                if(newX>=0&&newX<r&&newY>=0&&newY<c&&heightMap[newX][newY]!=-1){
                    water+=Math.max(0,cur.h-heightMap[newX][newY]);
                    //IMPORTANT: the height put into pq is NOT heightMap[newX][newY], should be the max between
                    //heightMap[newX][newY] and cur.h
                    pq.add(new Point(newX,newY,Math.max(cur.h,heightMap[newX][newY])));
                    heightMap[newX][newY]=-1;                    
                }
            }            
        }
        return water;
        
    }
}