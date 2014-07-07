package cn.caidd.log;

public class Log {
	public static final void log(String message) {
		System.out.println("------------------------------------");
		System.out.println(message);
		System.out.println("------------------------------------");
	}

	public static final void log(Throwable exception) {
		System.out.println("------------------------------------");
		exception.printStackTrace();
		System.out.println("------------------------------------");
	}
}
