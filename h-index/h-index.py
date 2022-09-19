def score(j: int, A: list):
    total = sum(A[j:])
    return total


def calculate_hindex(num_case: int, publications: int, citations: list):
    A = [0] * (publications + 1)
    ans = []
    hindex = 0
    for publication in range(publications):
        A[publications if citations[publication] > publications else citations[publication]]+= 1
        j = publication + 1
        while j and j > hindex:
            if(score(j, A) >= j):
                hindex = j
                break
            j -= 1
        ans.append(hindex)
    print("Case #%d: " % num_case, end='')
    print(*ans)
    return ans


if __name__ == '__main__':
    num_cases = int(input())
    for num_case in range(num_cases):
        num_publications = int(input())
        num_citations = list(map(int, input().split()))
        scores = calculate_hindex(num_case + 1, num_publications, num_citations)
