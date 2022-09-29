var reverse_linked_list = function (head) {
  let curr_node = head,
    prev_node = null;

  while (curr_node) {
    let next_node = curr_node.next;
    curr_node.next = prev_node;
    prev_node = curr_node;
    curr_node = next_node;
  }
  return prev_node;
};
