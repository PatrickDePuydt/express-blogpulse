# 1 
Why does a singular route get to have two different methods to the same path?

| Method | Path |
|:-----------:|:------------:|
| GET | /authors |
| POST | /authors |

Why not

| Path |
|:-----------:|
| /get/authors |
| /post/authors |

# 2
How will I know which ID to query by?


# 3
How to re-write "[arg, arg]"
```
{
	...
	.then(([article, comment]) => {});
	...
}
```
