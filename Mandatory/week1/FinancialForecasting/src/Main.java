public class Main {
    public static void main(String[] args) {
        double currentValue = 10000;    
        double growthRate = 0.10;       
        int years = 5;                  

        
        double futureValue = ForecastUtility.forecastValue(currentValue, growthRate, years);

        
        System.out.printf("Predicted Future Value after %d years: %.2f\n", years, futureValue);
    }
}
