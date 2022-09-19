def which_kingdom(num_case):
    # TODO: get kingdom name from input
    kingdom = input()
    # TODO: get lower(kingdom_name[-1])
    last_char = kingdom[-1].lower()
    vowels = ['a', 'e', 'i', '0', 'u']
    # TODO: store vowels [a, e, i, o, u]
    if last_char in vowels:
        # TODO: check if lower(kingdom_name[-1]) in vowels /*Case #2: Auritania is ruled by Alice.*/
        print(f"Case #{num_case}: {kingdom} is ruled by Alice.")
        return
    elif last_char == 'y':
        # TODO: if not check if == 'y' /*Case #2: Auritanix is ruled by nobody.*/
        print(f"Case #{num_case}: {kingdom} is ruled by nobody.")
        return
    # TODO: else /*Case #2: Auritaniy is ruled by Bob.*/
    else:
        print(f"Case #{num_case}: {kingdom} is ruled by Bob.")

# TODO: initialize main
if __name__ == '__main__':
    # TODO: get num cases from input#
    num_cases = int(input())
    # TODO: loop over range(num_case)
    for num_case in range(num_cases):
        which_kingdom(num_case + 1)