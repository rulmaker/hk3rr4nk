int base = arr.size();
        double positivo = 0,negativo = 0,cero = 0;
        
        for(int i=0; i<arr.size(); i++){
        
            if(arr.get(i) > 0){
                positivo++;
            }else if(arr.get(i) < 0){
                negativo++;
            }else if(arr.get(i) == 0){
                cero++;
            }
            
        }
        
        
        
         System.out.printf("%.6f%n", positivo/base);
         System.out.printf("%.6f%n", negativo/base);
         System.out.printf("%.6f%n", cero/base);
