def sort_color(color):
    pass

def sort_durability(durability: int):
    pass

def sort_uid(durability: int):
    pass

def decide_order(test_case: int):
    # TODO: get num fabrics from input
    fabric_list = []
    num_fabrics = int(input())
    # TODO: loop over num_fabrics
    # TODO: get fab_properties from input
    if num_fabrics:
        if num_fabrics > 1:
            for fabric in range(num_fabrics):
                fab_props = list(input().split())
                fabric_list.append(fab_props)
        else:
            print(f"Case #{test_case}: 1")
    for fabric in fabric_list:
        # TODO: sort by color and durability
        sorted_by_color = sort_color(fabric_list[fabric][0])
        sorted_by_durability = sort_durability(fabric_list[fabric][1])
        sorted_by_uid = sort_uid(fabric_list[fabric][2])

        if sorted_by_color == sorted_by_durability:
            print(f"Case #{test_case}: {num_fabrics}")

    # TODO: deal with edge cases
if __name__=='__main__':
    test_cases = int(input())
    for test_case in range(test_cases):
        decide_order(test_case + 1)