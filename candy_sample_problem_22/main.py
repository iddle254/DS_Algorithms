def process_case(case_num):
    # read in the input for a single case
    (num_candy_bags, num_kids) = tuple(map(int, input().split()))
    candy_counts = list(map(int, input().split()))

    # compute the total amount of candy
    total_candy = 0
    for i in range(num_candy_bags):
        if i != num_candy_bags:
            total_candy += candy_counts[i]
    # Use module to calculate remaining candy
    amount_remaining = total_candy % num_kids

    print(f"Case #{case_num}: {amount_remaining}")

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    # Iterate through each case
    num_case = int(input())
    for i in range(num_case):
        process_case(i + 1)
