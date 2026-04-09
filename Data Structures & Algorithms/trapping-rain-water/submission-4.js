class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */

    calcArea(array, l, r, height) {
        let markedAreas = 0;
        for(let i = l + 1; i < r; i++) {
            markedAreas += Math.min(array[i], height);
        }
        return ((r - l - 1) * height) - markedAreas;
    }

    trap(height) {

        let ans = 0;
        let maxHeight = 0;

        for(let i = 0; i < height.length - 1; i++) {
            if(height[i] > maxHeight) maxHeight = height[i];
        }

        let llp, lrp;

        for(let currentHeight = maxHeight; currentHeight >= 0; currentHeight--) {
            
            let lp = 0, rp = height.length - 1;
        
            while(lp < rp && height[lp] - currentHeight < 0 || height[rp] - currentHeight < 0) {
                if(height[lp] - currentHeight < 0) {
                    lp++;
                } 
                
                if(height[rp] - currentHeight < 0) {
                    rp--;
                }
            }

            if(lp !== rp) {
                if(llp && lp !== llp) {
                    ans += this.calcArea(height, lp, llp, currentHeight)
                }

                if(lrp && rp !== lrp) {
                    ans += this.calcArea(height, lrp, rp, currentHeight);
                }

                if(!lrp && !lrp) {
                    ans += this.calcArea(height, lp, rp, currentHeight)
                }

                if(lp !== llp || rp !== lrp) {
                    llp = lp;
                    lrp = rp;
                }
            }        

        }

        return ans;
    }

}
