public class codewars {
    public static void main(String[] args) {
        System.out.println(strCount("Hello", 'o'));  // returns 1
        System.out.println(strCount("Hello", 'l'));  // returns 2
        System.out.println(strCount("", 'z'));
    }

    public static int strCount(String str, char letter) {
        int count = 0;

        for(char c: str.toCharArray()) {
            if(c == letter) {
                count++;
            }
        }
        return count;
    }
}
