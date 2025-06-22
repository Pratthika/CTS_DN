import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "T-Shirt", "Apparel"),
            new Product(3, "Book", "Books"),
            new Product(4, "Smartphone", "Electronics"),
            new Product(5, "Shoes", "Footwear")
        };

        
        Product found1 = SearchUtility.linearSearch(products, "Book");
        System.out.println("Linear Search: " + (found1 != null ? found1 : "Not Found"));

        
        Arrays.sort(products, Comparator.comparing(Product::getProductName));

        
        Product found2 = SearchUtility.binarySearch(products, "Book");
        System.out.println("Binary Search: " + (found2 != null ? found2 : "Not Found"));
    }
}
