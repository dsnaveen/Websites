#include <iostream>
#include <thread>

using namespace std;

void foo(int i) 
{
	cout << "foo(" << i << ")" << endl;
}

struct task_struct
{
	int& i;
	task_struct(int& i_):i(i_){}
	void operator()()
	{
		for(unsigned j = 0; j < 10; ++j)
		{
			foo(i);
		}
	}
};

class MyThread
{
	thread t;
public:
	explicit MyThread(thread& t_):t(move(t_))
	{
		// Checking the thread is still joinalbe in the constructor 
		// and throw an exception if it’s not.
		if(!t.joinable()) 
			throw std::logic_error( "Not joinable" );
		cout << "MyThread constructor\n";
	}

	~MyThread()
	{
		// joins with the thread supplied to the constructor
		t.join();
		// do not need to joinable check. 
		// if(t.joinable()) t.join();
		cout << "MyThread destructor\n";
	}

	// copy constructor
	MyThread(MyThread const&) ;

	// copy-assignment operator
	MyThread& operator=(MyThread const&);
};

void current_thread_task()
{
	cout << "do something in current_thread_task()\n";
};

void f()
{	
	int state=0; // local state variable

	// the new thread is passed in directly to the MyThread 
	// rather than having to create a separate named variable for it.

	// So, the following two lines of code is not needed
	// task_struct task(state);
	// thread t(task);
	MyThread t(thread(task_struct(state)));

	current_thread_task();
	// When the initial thread reaches this point, 
	// the object of MyThread is destroyed in ~MyThread()
}

int main()
{
	f();

	return 0;
}